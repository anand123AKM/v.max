import express, { json } from "express";
import { createTransport } from "nodemailer";
import { randomInt } from "crypto";
import cors from "cors";
import connection from "./databaseCON.js";
import bodyParser from "body-parser";

const app = express();
app.use(json());
app.use(cors());
app.use(bodyParser.json());

let otpStore = {};

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "ak47akm1610@gmail.com",
    pass: "rrkk jwoh vgrj fxbf",
  },
});

function generateOTP() {
  return randomInt(100000, 999999).toString();
}

function sendOTPEmail(email, otp) {
  const mailOptions = {
    from: "ak47akm1610@gmai.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent: " + info.response);
  });
}

app.post("/request-otp", (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();
  otpStore[email] = otp;
  sendOTPEmail(email, otp);
  res.send("OTP sent to your email!");
});

app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (otpStore[email] && otpStore[email] === otp) {
    delete otpStore[email];
    res.send("OTP verified successfully!");
  } else {
    res.status(400).send("Invalid OTP");
  }
});

app.post("/verify-otp", async (req, res) => {
  const { email, name } = req.body;
  console.log("Received data:", { email, name });

  const sql = "INSERT INTO users (email, name) VALUES (?, ?)";
  connection.query(sql, [email, name], (error, results, fields) => {
    if (error) {
      console.error("Error creating user profile document:", error);
      res.status(400).send("Error creating user profile document");
    } else {
      res.send("User profile document successfully created!" + results);
    }
  });
});

app.get("/verify-otp", (req, res) => {
  connection.query("SELECT * FROM users", (error, results, fields) => {
    if (error) {
      console.error("Error fetching users:", error);
      res.status(400).send("Error fetching users");
    } else {
      console.log(results);
      res.json(results);
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
