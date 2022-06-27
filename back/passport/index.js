const passport = require("passport");
const local = require("./local"); // passport-local
const { User } = require("../models");

module.exports = () => {
  // pssport 로그인 성공시 이곳에서 실행
  passport.serializeUser((user, done) => {
    // 쿠키랑 묶어줄 id만 저장
    done(null, user.id); // 서버에러, 성공
  });

  // 로그인 성공 후 요청
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user); // 서버에러, 성공
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
