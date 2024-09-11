import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Kishan Kokal👻" <kokalkishan.official@gmail.com>', // sender address
    to: "kokalkishan1072@gmail.com", // list of receivers
    subject: "Hello Again✔", // Subject line
    text: "Hello world?", // plain text body
    html: `
        <html>
            <body>
            Hello and welcome
            </body>
        </html>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
