const expres = require("express");
const mongoose = require("mongoose");

const app = expres();
const uri = "mongodb://mongo-server:27017/db"
mongoose.connect(uri, () => {
  console.log("database connected..")
});

app.get("/", (req, res) => {
  res.send("hey");
});

app.listen(8000, () => console.log("app is running"));
