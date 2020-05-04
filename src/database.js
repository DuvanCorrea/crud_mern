const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/crudMERN";

const db = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("db conect on ", uri);
});

module.exports = db;
