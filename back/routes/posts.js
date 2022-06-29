const express = require("express");

const { Post, Image, User, Comment } = require("../models");

const router = express.Router();

// GET /posts
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      // where,
      //   offset: 10, // limit이 10이고,offset이 10이면 11부터 20까지 가져오기,100이면 101부터 110 가져오기
      limit: 10, // 게시글 10개 가져오기
      order: [
        ["createdAt", "DESC"], // 게시글 생성일 기준으로 내림차순 정렬
        [Comment, "createdAt", "DESC"], // 2차적으로 댓글을 내림차순 정렬
      ],
      include: [
        {
          model: User, // include의 user는 password 제외
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: Uder,
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, //좋아요 누른 사람
          as: "Likers",
          attributes: ["id"],
        },
      ],
    });
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
