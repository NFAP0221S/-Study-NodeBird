module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post", // Mysql에는 posts 테이블 생성
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false, // false면 필수
      },
    },
    {
      charset: "utf8mb4", // 이모티콘
      collate: "utf8_general_ci", // 이모티콘 저장
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // 게시글은 사람한태 속해있다.
    db.Post.belongsToMany(db.Hashtag); // 게시글 N : 해쉬태그 N
    db.Post.hasMany(db.Comment); // 게시글 1 : 댓글 N
    db.Post.hasMany(db.Image); // 게시글 1 : 이미지 N
    db.Post.belongsToMany(db.User, { through: "Like" }); // 게시글 N : 유저 N // 좋아요
  };
  return Post;
};
