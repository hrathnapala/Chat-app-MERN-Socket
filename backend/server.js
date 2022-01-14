const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const { chats } = require("./data/data");

const app = express();

app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const chat = chats.find((c) => c._id === req.params.id);
  res.send(chat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Started on PORT " + PORT);
});
