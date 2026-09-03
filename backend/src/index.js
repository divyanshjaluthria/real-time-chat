// const express = require("express");
import express from "express";
import cors from "cors";
import "dotenv/config";
import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";
// env data
const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

//middlewares
app.use(express.json());
app.use(cors({ orgin: FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware());

// health check
app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});
app.listen(PORT, () => {
  connectDB();
  console.log(`server is up and running in port ${PORT}`);
});
