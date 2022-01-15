const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const { chats } = require("./data/data");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

connectDB();

app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

app.use("/api/user", require("./routes/userRoute"));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Started on PORT " + PORT);
});
