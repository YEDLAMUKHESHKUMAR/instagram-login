if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// model
const User = require("./models/user");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.use(express.json({ extended: false }));

const dbUrl = process.env.ATLASDB_URL;

mongoose
  .connect(dbUrl)
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

app.listen(port, () => {
  console.log("server started");
});
