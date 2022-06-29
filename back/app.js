const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const morgan = require("morgan");

const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const db = require("./models");
const passportConfig = require("./passport");

dotenv.config();
const app = express();
// 서버 실행후 db 와 시퀄라이즈 연결
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);
passportConfig();

// 미들웨어

app.use(morgan("dev")); // 프론트에서 백엔드로 요청을 보낼 때 어떤 요청을 보냈는지 기록을 보냄

app.use(
  cors({
    origin: "http://localhost:3060", //  '*' 은 모든 주소의 요청 허용
    credentials: true, // true 는 쿠키 전달
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 쿠키
app.use(cookieParser(process.env.COOKIE_SECRET));
// 세션
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/posts", postsRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);

// 마지막 에러처리 미들웨어
// 에러처리 미들웨어는 마지막에서 기본적으로 실행된다.
// 하지만 에러처리를 다르게 바꾸고 싶으면 코드 작성
// app.use((err, req, res, next) => {

// })

app.listen(3065, () => {
  console.log("서버 실행 중!");
});
