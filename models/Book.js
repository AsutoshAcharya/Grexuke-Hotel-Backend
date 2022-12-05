import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    bookedhotel: {
      type: String,
      required: true,
    },
    bookedroom: [{ type: String, required: true }],
    bookedroomnumber: [{ type: String, required: true }],

    checkindate: {
      type: String,
      required: true,
    },
    checkoutdate: {
      type: String,
      required: true,
    },
    amountdue: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookSchema);
