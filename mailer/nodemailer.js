const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

// Create a transporter using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service (e.g., 'gmail', 'yahoo', etc.)
  auth: {
    user: "samibangash2018@gmail.com", // Your email address
    pass: "gktkpuljsjatiljx", // Your email password or an app password for security
  },
});

// Generate a random OTP (6 digits)
const otp = otpGenerator.generate(6);

// Define the email details
const mailOptions = {
  from: "samibangash2018@gmail.com", // Sender's email address
  to: "fayaz.rashid@xstak.com", // Recipient's email address
  subject: "Your OTP Code", // Subject of the email
  text: `Your OTP code : ${otp}  . This code will expire in 5 minutes.`, // Email content
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
