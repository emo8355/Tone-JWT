const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const tone = require("../Src/analysis").get_tone;
const get_eomoji = require("../Src/displayemoji").emoji;

router.use(cookieParser());

router
  .route("/index")
  .get((req, res) => {
    res.render("index", {
      message: `Hello ${req.user.email}`,
      messageClass: "alert-success"
    });
  })
  .post((req, res) => {
    const inputtext = req.body;
    tone(inputtext).then(value => {
      res.render("index", {
        text: req.body.inputtext,
        textClass: "alert-success",
        message: `${get_eomoji(value)}`,
        messageClass: "alert-success",
        inline_style: "font-size:8em"
      });
    });
  });

module.exports = router;
