const passport = requrie("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = requrie("bcrypt");
const { User } = require("../models");

// 패스포트로 로그인하기
module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            return done(null, false, { reason: "존재하지 않는 이메일입니다!" }); // 서버에러, 성공, 클라이언트 에러
          }
          const result = await bcrypt.compare(password, user.password); // compare 는 비동기 함수
          // 비밀번호가 일치하면
          if (result) {
            // 로그인 성공
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다." });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
