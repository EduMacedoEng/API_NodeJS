const mongoose = require("mongoose");

//mongoose.connect('mongodb://localhost/noderest', {useMongoClient: true});
mongoose.connect("mongodb://localhost/noderest", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
//mongoose.connect("mongodb://localhost/noderest", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
