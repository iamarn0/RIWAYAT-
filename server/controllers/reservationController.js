import mongoose from "mongoose";
import Reservation from "../models/Reservation.js";
import { memory } from "../utils/memoryStore.js";

export async function createReservation(req, res) {
  const saved = mongoose.connection.readyState === 1
    ? await Reservation.create(req.validated)
    : memory.addReservation(req.validated);

  res.status(201).json({
    success: true,
    message: "Your reservation request has been received.",
    data: { id: saved._id },
  });
}
