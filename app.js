const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/users");
const indexRouter = require("./routes/indexRouter");
const exphbs = require("express-handlebars");
const passport = require("./middleware/passport");

require("dotenv").config();

let ports = process.env.PORT_APP;

const app = express();

app.engine(
  "hbs",
  exphbs({
    extname: "hbs"
  })
);
app.set("view engine", "hbs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", passport.authenticate("jwt", { session: false }), userRouter);
app.use("/", indexRouter);

app.listen(ports, () => {
  console.log(`app server has start at ${ports}!`);
});
