const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "razanakolonaelvinah@gmail.com",
      pass: "pswj csvj nqhg odio",
    }
  });

  const mailOptions = {
    from: email,
    to: "tonemail@gmail.com",
    subject: "Message depuis Portfolio",
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Email envoyé");
  } catch (error) {
    res.status(500).send(error);
  }

});

app.listen(5000, () => {
  console.log("Serveur démarré sur port 5000");
});