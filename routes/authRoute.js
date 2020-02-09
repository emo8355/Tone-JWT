const express = require("express");
const authController = require("../controllers/authController");

const passport = require("../middleware/passport");

const router = express.Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: info ? info.message : "Login Failed"
      });
    }
    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }
      const token = authController.generateToken(user);
      return res.json({ user, token });
    });
  })(req, res, next);
});

module.exports = router;
