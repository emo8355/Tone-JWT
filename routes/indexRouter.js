const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const fetch = require("node-fetch");

router.route("/").get((req, res) => {
  res.render("login");
});

router.route("/login").post((req, res) => {
  fetch("http://localhost:4000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req.body)
  })
    .then(res => res.json())
    .then(json => {
      res.cookie("JWT", json["token"]);
      res.redirect("/users/index");
    })
    .catch(err => console.log(err));
});

router.route("/logout").get((req, res) => {
  res.clearCookie("JWT");
  res.redirect("/");
});
module.exports = router;
