const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configure the nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'your_email_service_provider',
  auth: {
    user: 'your_email_address',
    pass: 'your_email_password',
  },
});

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'your_email_address',
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
