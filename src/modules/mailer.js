const nodemailer = require("nodemailer");
//const mailConfig = require("../config/mail.json");
const { host, post, auth, user, pass } = require("../config/mail.json");

//const transport = nodemailer.createTransport({
//  host: "stmp.mailtrap.io",
//  port: 2525,
// auth: { user: "aaa", pass: "234" }
//});

const transport = nodemailer.createTransport({
  host,
  post,
  auth: { user, pass }
});
