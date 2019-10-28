const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json()); // serve para entender quando eu enviar minha requisição em JSON.
app.use(bodyParser.urlencoded({ extended: false })); // serve para entender parametros URL, para que possa ser possível decodar.

//app.get('/', (req, res) => {
//  res.send('Ok !')
//})

require("./controllers/authController")(app); // aqui eu referencio o arquivo authController dentro da aplicação principal
require("./controllers/projectsController")(app); // aqui eu referencio o arquivo projects dentro da aplicação principal
app.listen(3000);
