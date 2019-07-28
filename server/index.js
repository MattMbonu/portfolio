const express = require("express");
const next = require("next");
const routes = require("../routes");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);
const nodemailer = require("nodemailer");
require("dotenv").config();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.json({ extended: false }));
    console.log(process.env);
    server.post("/api/contact", (req, res) => {
      console.log(req.body);
      const name = req.body.name;
      const from = req.body.email;
      const message = req.body.message;
      const to = "mcmbonu1@gmail.com";
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          clientId: process.env.CLIENTID,
          clientSecret: process.env.CLIENTSECRET
        }
      });

      transporter.sendMail(
        {
          from,
          to,
          subject: name,
          text: message,
          auth: {
            user: "mcmbonu1@gmail.com",
            refreshToken: process.env.REFRESHTOKEN,
            accessToken: process.env.ACCESSTOKEN,
            expires: 1484314697598
          }
        },
        (err, data) => {
          if (err) {
            console.error(error);
            return res
              .status(400)
              .send({ message: "error processing request" });
          } else {
            console.log("email sent!!");
            res.send(data);
          }
        }
      );
    });

    server.get("*", (req, res) => {
      return handle(req, res);
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
