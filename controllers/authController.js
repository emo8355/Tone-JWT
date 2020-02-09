const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateToken(user) {
  let token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  return token;
}

module.exports = { generateToken };
