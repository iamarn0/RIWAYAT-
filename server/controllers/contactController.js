import mongoose from "mongoose";
import Contact from "../models/Contact.js";
import { memory } from "../utils/memoryStore.js";

export async function createContact(req, res) {
  const saved = mongoose.connection.readyState === 1
    ? await Contact.create(req.validated)
    : memory.addMessage(req.validated);

  res.status(201).json({
    success: true,
    message: "Your message has been received.",
    data: { id: saved._id },
  });
}
