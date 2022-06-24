module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", // Mysql에는 users 테이블 생성
    {
      // id 가 기본적으로 들어있다.
      email: {
        type: DataTypes.STRING(30),
        allowNull: false, // false면 필수
        unique: true, // 고유값
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: "utf-8", // 한글사용
      collate: "utf8_general_ci", // 한글 저장
    }
  );
  // 관계 작성
  User.associate = (db) => {
    db.User.hasMany(db.Post); // 유저 1 : 게시글 N
    db.User.hasMany(db.Comment); // 유저 1 : 댓글 N
    db.User.belongsToMany(db.Post, { through: "Like" }); // 유저 N : 게시글 N // 좋아요
  };
  return User;
};
