const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  console.log(req);
  const name = req.body.name;
  const from = req.body.email;
  const message = req.body.message;
  const to = "mcmbonu1@gmail.com";
  var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
      user: "mcmbonu1@gmail.com",
      pass: "dmjjmd123"
    }
  });
  var mailOptions = {
    from: from,
    to: to,
    subject: name + " | new message !",
    text: message
  };
  smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
});
module.exports = router;
