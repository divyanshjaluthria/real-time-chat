// const express = require("express");
import express from "express";
import cors from "cors";
import "dotenv/config";
import fs from "fs";
import path from "path";
import User from "./models/User.model.js";
import { connectDB } from "./lib/db.js";
import job from "./lib/cron.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhook from "./webhooks/clerk.webhook.js";

// env data
const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;
const publicDir = path.join(process.cwd(), "public");

// its imp that you dont parse the webhook event data , it should be in raw format
app.use(
  "/api/weebhooks/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhook,
);

//middlewares
app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware());

// health check
app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.use(express.static(publicDir));
app.get("/{*any}", (req, res, next) => {
  res.sendFile(path.join(publicDir, "index.html"), (err) => next(err));
});
app.listen(PORT, () => {
  connectDB();
  console.log(`server is up and running in port ${PORT}`);

  if (process.env.NODE_ENV === "production") {
    job.start();
  }
});

// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import path from "path";

// import { connectDB } from "./lib/db.js";
// import { clerkMiddleware } from "@clerk/express";

// const app = express();

// const PORT = process.env.PORT || 5000;

// const frontendDist = path.resolve(process.cwd(), "public");

// app.use(express.json());

// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   }),
// );

// app.use(clerkMiddleware());

// app.get("/health", (req, res) => {
//   res.status(200).json({ ok: true });
// });

// // Serve React frontend
// app.use(express.static(frontendDist));

// app.get("/*any", (req, res) => {
//   res.sendFile(path.join(frontendDist, "index.html"));
// });

// app.listen(PORT, () => {
//   connectDB();
//   console.log(`server is up and running on port ${PORT}`);

//
// });
