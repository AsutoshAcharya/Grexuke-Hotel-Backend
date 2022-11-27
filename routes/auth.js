import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello this is auth endpoint");
});
router.get("/register", (req, res) => {
  res.send("hello this is register endpoint");
});

export default router;
