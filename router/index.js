const express = require("express");
// 인덱스 파일은 생략 가능
const postRouter = require("./post/index");
const userRouter = require("./user");

const router = express.Router();

router.use("/post", postRouter);
router.use("/user", userRouter);

module.exports = router;
