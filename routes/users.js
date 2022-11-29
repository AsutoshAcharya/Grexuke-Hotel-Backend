import express from "express";
import { verifyToken, verifyUser } from "./../utils/verifyToken.js";
import {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
} from "./../controllers/user.js";

const router = express.Router();

router.get("/checkAuthentication", verifyToken, (req, res, next) => {
  res.send("hello use you are logged in");
});

router.get("/checkUser/:id", verifyUser , (req, res, next) => {
  res.send("hello use you are logged in and you can delete your account");
});

//update

router.put("/:id", updateUser);

//delete

router.delete("/:id", deleteUser);

//get

router.get("/:id", getUser);

//get all

router.get("/", getAllUsers);

export default router;
