const express = require("express");
const next = require("next");
const routes = require("../routes");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);

//SERVICE
const authService = require("./services/auth");

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(function(err, req, res, next) {
      if (err.name === "UnauthorizedError") {
        res
          .status(401)
          .send({ title: "Unauthorized", detail: "Unauthorized Access" });
      }
    });
    const PORT = process.env.PORT || 3000;
    server.use(handle).listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
