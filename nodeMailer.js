const nodemailer = require("nodemailer");

const mockMail = (payload) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: "phil.johnpeter@gmail.com",
    to: "kingsley.davidakindele@gmail.com",
    subject: "Testing",
    text: message,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
      return "Error";
    } else {
      console.log(data);
      return data;
    }
  });
};

module.exports = mockMail;
