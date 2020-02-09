const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const userController = require("../controllers/userController");
require("dotenv").config();

const cookieExtractor = function(req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["JWT"];
  }
  return token;
};

const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    session: false
  },
  (email, password, done) => {
    const user = userController.get_user_by_email(email, password);
    return user
      ? done(null, user)
      : done(null, false, {
          error: "Your login details are not valid. Please try again"
        });
  }
);

const jwtLogin = new JwtStrategy(
  {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.ACCESS_TOKEN_SECRET // TODO: use dotenv to hide secret
  },
  (payload, done) => {
    const user = userController.get_user_by_id(payload.id);
    return user
      ? done(null, user)
      : done(null, false, {
          error: "Your login details are not valid. Please try again"
        });
  }
);

module.exports = passport.use("local", localLogin).use("jwt", jwtLogin);
