const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// model
const User = require("./models/user");

app.use(express.json());
app.use(cors());

app.use(express.json({ extended: false }));

mongoose
  .connect("mongodb://127.0.0.1:27017/insta")
  .then(() => console.log("connected to db"))
  .catch(console.error);

app.post("/login", async (req, res) => {
  const { username, Password } = req.body;
  console.log(username, Password);
  const newUser = new User({
    username,
    password: Password,
  });
  await newUser.save();
  res.json(newUser);
});

app.listen(3001, () => {
  console.log("server started");
});
