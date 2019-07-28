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

    server.post("/api/contact", (req, res) => {
      console.log(req.body);
      const name = req.body.name;
      const from = req.body.email;
      const message = req.body.message;
      const to = "mcmbonu1@yahoo.com";
      const smtpTransport = nodemailer.createTransport({
        service: "yahoo",
        auth: {
          user: "mcmbonu1@yahoo.com",
          pass: process.env.PASSWORD
        }
      });
      const mailOptions = {
        from: from,
        to: to,
        subject: name + " | new message !",
        text: message
      };
      smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
          console.log(error);
        } else {
          console.log("email sent!");
          res.redirect("/");
        }
      });
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
