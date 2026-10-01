import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const allowedOrigin = new URL(
  process.env.FRONTEND_URL ||
    process.env.RENDER_EXTERNAL_URL ||
    "http://localhost:5173",
).origin;

const io = new Server(server, { cors: { origin: [allowedOrigin] } });

function getReceiverSocketIds(userId) {
  return userSocketMap.get(String(userId)) ?? [];
}

const userSocketMap = new Map();

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;

  if (userId) {
    const userKey = String(userId);
    const sockets = userSocketMap.get(userKey) ?? new Set();
    sockets.add(socket.id);
    userSocketMap.set(userKey, sockets);
  }

  io.emit("getOnlineUsers", [...userSocketMap.keys()]);

  socket.on("disconnect", () => {
    if (userId) {
      const userKey = String(userId);
      const sockets = userSocketMap.get(userKey);
      sockets?.delete(socket.id);
      if (sockets?.size === 0) userSocketMap.delete(userKey);
    }
    io.emit("getOnlineUsers", [...userSocketMap.keys()]);
  });
});

export { app, server, io, getReceiverSocketIds };
