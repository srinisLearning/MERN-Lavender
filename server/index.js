const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 6066;
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/UserModel");

require("dotenv").config();

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(
  cors({
    origin: "http://localhost:3003",
    credentials: true,
  })
);
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection;
connection.on("open", () => {
  console.log("Connected to MongoDB");
});
connection.on("error", (err) => {
  console.log("Error", err);
});
//console.log(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.send("Welcome to Wasan World");
});
app.post("/register", async (req, res) => {
  const { name, email, mobile, password } = req.body;
  console.log(name, email, mobile, password);
  try {
    const newUser = await User.create({
      name,
      email,
      mobile,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(newUser);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
