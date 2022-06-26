const passport = require("passport");
const local = require("local"); // passport-local

module.export = () => {
  passport.serializeUser(() => {});

  passport.deserializeUser(() => {});

  local();
};
