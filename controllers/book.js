import Booking from "../models/Book.js";

//Booking the room

export const bookRoom = async (req, res, next) => {
  const bookRoom = new Booking(req.body);

  try {
    const bookedRoom = await bookRoom.save();
    res.status(200).json(bookedRoom);
  } catch (err) {
    next(err);
  }
};

// Get all booked users only for admin

export const getAllBookedUserDetails = async (req, res, next) => {
  try {
    const findUser = await Booking.find();
    res.status(200).json(findUser);
  } catch (err) {
    next(err);
  }
};

//Get specific bookings according to usernames through query

// http://localhost:8800/api/booking/Chandan
export const findByName = async (req, res, next) => {
  const username1 = req.params.username;

  try {
    const allUsers = await Booking.find();

    const user1 = await Promise.all(
      allUsers.filter((user) => {
        return user.username === username1;
      })
    );
    res.status(200).json(user1);
  } catch (err) {
    next(err);
  }
};

//Delete or cancel booking
//http://localhost:8800/api/booking/638b63e4692e8632d752a3c4

export const deleteBooking = async (req, res, next) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("your booking is cancelled");
  } catch (err) {
    next(err);
  }
};

//getting single booking detail
export const getSingleBookingDetail = async (req, res, next) => {
  try {
    const bookingDetails = await Booking.findById(req.params.id);
    res.status(200).json(bookingDetails);
  } catch (err) {
    next(err);
  }
};
