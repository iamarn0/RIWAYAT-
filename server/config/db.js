import mongoose from "mongoose";

let mode = "memory";

export function getDbMode() {
  return mongoose.connection.readyState === 1 ? "connected" : "memory";
}

export async function connectDB() {
  const uri = process.env.MONGODB_URI?.trim();

  if (!uri) {
    mode = "memory";
    console.log("MONGODB_URI is empty. Using the in-memory store.");
    return mode;
  }

  try {
    await mongoose.connect(uri);
    mode = "mongo";
    console.log("Connected to MongoDB.");
  } catch (error) {
    mode = "memory";
    console.error(`MongoDB connection failed (${error.message}). Using the in-memory store.`);
  }

  return mode;
}
