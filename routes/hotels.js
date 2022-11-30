import express from "express";
import Hotel from "../models/Hotel.js";

import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  getHotelRooms,
  updateHotel,
} from "./../controllers/hotel.js";
import { verifyAdmin } from "./../utils/verifyToken.js";

const router = express.Router();

//create

router.post("/", verifyAdmin, createHotel);

//update

router.put("/:id", verifyAdmin, updateHotel);

//delete

router.delete("/:id", verifyAdmin, deleteHotel);

//get

router.get("/find/:id", getHotel);

//get all

router.get("/", getAllHotels);

//for featured
router.get("/countByCity", countByCity);

//for different types of hotels ,villas,resorts,apartments etc.
router.get("/countByType", countByType);

//for rooms

router.get("/room/:id", getHotelRooms);

export default router;
