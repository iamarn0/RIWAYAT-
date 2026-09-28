import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    guests: { type: Number, required: true },
    occasion: { type: String, default: "" },
    requests: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.model("Reservation", reservationSchema);
