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
  // 라우터에 접근하게 되면, deserializeUser실행
  // 저장한 id 를 토대로 req.user를 만듦
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } }); // 저장한 id
      done(null, user); // 서버에러, 성공 // req.user
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
