const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User } = require("../models");

const router = express.Router();

// POST/user/login
router.post("/login", passport.authenticate("local"));

// POST /user/
router.post("/", async (req, res, next) => {
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

module.exports = router;
