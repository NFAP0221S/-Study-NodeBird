exports.isLoggedIn = (req, res, next) => {
  // passport 에서 isAuthenticated 함수를 제공
  // true 면 로그인 한 상태
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  // passport 에서 isAuthenticated 함수를 제공
  // true 면 로그인 한 상태
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인하지 않은 사용자만 접근 가능합니다.");
  }
};
