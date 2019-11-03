const path = require("path");
const hbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");
//const mailConfig = require("../config/mail.json");
const { host, port, user, pass } = require("../config/mail.json");

//const transport = nodemailer.createTransport({
//  host: "stmp.mailtrap.io",
//  port: 2525,
// auth: { user: "aaa", pass: "234" }
//});

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass }
});

//transport.use("compile", hbs()
//);
const handlebarOptions = {
  viewEngine: { partialsDir: "./src/resources/mail/" },
  viewPath: path.resolve("./src/resources/mail/"),
  extName: ".html"
};
//const handlebarOptions = {
//  viewEngine: {
//    partialsDir: "./src/resources/mail/"
//  },
//  viewPath: path.resolve("./src/resources/mail/"),
//  extName: ".html"
//};

transport.use("compile", hbs(handlebarOptions));

module.exports = transport;
