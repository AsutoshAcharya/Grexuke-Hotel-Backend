import express from "express";
import {
  verifyToken,
  verifyUser,
  verifyAdmin,
} from "./../utils/verifyToken.js";
import {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
} from "./../controllers/user.js";

const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   res.send("hello use you are logged in");
// });

// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user you are logged in and you can delete your account");
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin you are logged in and you can delete all accounts");
// });

//update

router.put("/:id", verifyUser, updateUser);

//delete

router.delete("/:id", verifyUser, deleteUser);

//get

router.get("/:id", verifyUser, getUser);

//get all

router.get("/", verifyAdmin, getAllUsers);

export default router;
