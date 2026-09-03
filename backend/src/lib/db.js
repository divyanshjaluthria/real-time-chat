import mongoose from "mongoose";

export async function connectDB() {}
try {
  const mongoURL = process.env.MONGODB_URI;
  if (!mongoURL) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }

  const conn = await mongoose.connect(mongoURL);
  console.log("Connected", conn.connection.host);
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1); // 1 err
  //0 success
}
