const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const { User, Post } = require("../models");
const { isLoggendIn, isNotLoggedIn } = require("./middlewares");

// const db = require("../models");

const router = express.Router();

// login
router.post("/login", isNotLoggedIn, (req, res, next) => {
  // passport.authenticate 는 req,res,next를 사용하지 못하기 때문에 미들웨어 확장으로 사용할 수 있게 한다. (express 기법)
  // passport/local 에서 done이 실행되면 user가 이곳에서 실행
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    // info, 클라이언트 에러가 있으면
    if (info) {
      return res.status(401).send(info.reason); // 401, 허가되지 않음
    }
    // passport 로그인
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        // 전체 데이터 중에서 비밀번호 빼고만 가져옴
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
          },
          {
            model: User,
            as: "Followings",
          },
          {
            model: User,
            as: "Followers",
          },
        ],
      });
      // 로그인 성공시 쿠키랑 사용자정보를 프론트로 보내줌, passport/index.js로 이동
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

// signUp
router.post("/", isNotLoggedIn, async (req, res, next) => {
  try {
    console.log("성공");
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용 중인 아이디입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    console.log(req.body);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send("ok");
  } catch (error) {
    console.log("에러");
    console.error(error);
    next(error); // status 500
  }
});

// logout
router.post("/logout", isLoggendIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

module.exports = router;
