import nodemailer from "nodemailer/lib/nodemailer.js";
import {} from "dotenv/config.js";
const send_mail = async (name, email, number, date, time, payment_id) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
  });
  let convertedTime = {
    three: "03:00pm",
    six: "06:00pm",
    nine: "09:00am",
    twelve: "12:00pm",
  };
  let message = {
    from: "abdulwasimsguvi@gmail.com",
    to: email,
    subject: "Password reset mail",
    text: `Slot Booked! Name:${name},Email:${email},Number:+91-${number},Time:${
      convertedTime[`${time}`]
    },date:${date},Payment_ID:${payment_id}`,
    html: `<div>
        <h1>Booking Success</h1>
        <h5>Name = ${name}</h5>
        <h5>Email = ${email}</h5>
        <h5>Number = +91-${number}</h5>
        <h5>Date = ${date}</h5>
        <h5>Time = ${convertedTime[`${time}`]}</h5>
        <h5>Payment_ID = ${payment_id}</h5>
        <span><i>*Note : Use this Mail as Token*</i></span>
      </div>`,
  };

  let status = await transporter
    .sendMail(message)
    .then((res) => true)
    .catch((error) => false);
  return status;
};

export default send_mail;
