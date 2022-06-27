const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");

const postRouter = require("./routes/post");
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
app.use(
  cors({
    origin: "*", // 모든 주소의 요청 허용
    credentials: false,
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

// app.get("/", (req, res) => {
//   res.send("hello api");
// });

// app.get("/posts", (req, res) => {
//   res.send("hello api");
// });

// app.get("/posts", (req, res) => {
//   res.json([
//     { id: 1, content: "hello1" },
//     { id: 2, content: "hello2" },
//     { id: 3, content: "hello3" },
//   ]);
// });

app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버 실행 중!");
});
