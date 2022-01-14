const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

app.listen(5000, () => {
  console.log("Server Started on PORT " + 5000);
});
