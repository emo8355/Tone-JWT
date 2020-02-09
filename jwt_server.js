const express = require("express");
const passport = require("passport");
const authroute = require("./routes/authRoute");

require("dotenv").config();

const port = process.env.PORT_AUTH;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use("/auth", authroute);

app.listen(port, () => {
  console.log(`jwt server has start at ${port}!`);
});
