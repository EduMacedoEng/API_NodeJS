const fs = require("fs");
const path = require("path");

module.exports = app => {
  fs.readdirSync(__dirname) // aqui eu digo para ele ler um diretório, e o dirname corresponde a localização atual do arquivo que eu estou.
    .filter(file => file.indexOf(".") !== 0 && file !== "index.js") // aqui eu vou filtrar os arquivo que o nome deles não começam com ponto, o !== 0 significa que o ponto não pode ser o primeiro caractere, e também não queremos que seja o arquivo index.js que estamos mexendo agora. Então, vamos procurar por todos os arquivos que estão dentro da nossa pasta que não são index e que não começam com ponto, ou seja todos os outros controllers.
    .forEach(file => require(path.resolve(__dirname, file))(app)); // // aqui eu vou percorrer todos os arquivo e para cada um deles eu vou passar o app, porque dentro de cada arquivo a gente espera o app.
};
