import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import ConnectDB from "./configs/database.js";

import authRouter from './routes/auth.js'
import eventRouter from './routes/events.js'
import bookingRouter from './routes/bookings.js'



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/events", eventRouter);
app.use("/api/bookings", bookingRouter);

// Database Connection
ConnectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
