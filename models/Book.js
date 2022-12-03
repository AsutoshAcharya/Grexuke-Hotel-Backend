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
    bookedroom: {
      type: String,
      required: true,
    },
    bookedroomnumber: {
      type: Number,
      required: true,
    },

    checkindate: {
      type: Date,
      required: true,
    },
    checkoutdate: {
      type: Date,
      required: true,
    },
    amountpaid: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookSchema);
