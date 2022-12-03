import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  bookRoom,
  deleteBooking,
  findByName,
  getAllBookedUserDetails,
} from "./../controllers/book.js";

const router = express.Router();

//book room

router.post("/", bookRoom);

//getting booking details of individual users

router.get("/", verifyAdmin, getAllBookedUserDetails);

//find by name for SpecificUsername

router.get("/:username", findByName);

//delete booking
router.delete("/:id", deleteBooking);

export default router;
