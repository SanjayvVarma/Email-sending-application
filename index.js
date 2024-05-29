const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service : "gmail",
  host: "smtp.gmail.com", // Replace with your provider's SMTP server
  port: 	465, // Port may vary depending on your provider
  secure: true, // Use true for TLS, false for non-TLS (consult your provider)
  auth: {
    user: process.env.USERNAME, // Replace with your email address
    pass: process.env.PASSWORD, // Replace with your email password
  },
});

// const transporter = nodemailer.createTransport({
//   host: "localhost", // Replace with your provider's SMTP server
//   port: 1025, // Port may vary depending on your provider
//   secure: false, // Use true for TLS, false for non-TLS (consult your provider)
// });


const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    form {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      width: 400px;
    }
    label {
      font-weight: bold;
    }
    input[type="email"],
    input[type="text"],
    textarea {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    textarea {
      height: 100px;
    }
    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
    button:hover {
      background-color: #45a049;
    }
  </style>
  </head>
  <body>
  
  <form action="/send-email" method="post">
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required><br>
    <label for="subject">Subject:</label><br>
    <input type="text" id="subject" name="subject" required><br>
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" required></textarea><br><br>
    <button type="submit">Send Email</button>
  </form>
  
  </body>
  </html>  
    `);
});

app.post("/send-email", (req, res) => {
  console.log(req.body);
  const mailOptions = {
    from: "skvarma914@gmail.com", // Replace with your email address
    to: req.body.email, // Replace with the recipient's email address
    subject: req.body.subject, // Replace with your desired subject
    html: req.body.message, // Plain text content
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("error find" ,error);
    } else {
      console.log("Email sent: " + info.response);
      res.end("Email sent successfully");
    }
  });
});

app.listen(8080, () => console.log("Server is up and running at port 8080"));
