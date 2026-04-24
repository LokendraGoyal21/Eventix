import express from "express";
const eventRouter = express.Router();
import {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventsBySearch,
} from "../controllers/eventController.js";
import { protect, admin } from "../middleware/auth.js";

eventRouter.get("/", getEvents);
eventRouter.get("/:id", getEventById);
eventRouter.post("/", protect, admin, createEvent);
eventRouter.put("/:id", protect, admin, updateEvent);
eventRouter.delete("/:id", protect, admin, deleteEvent);
eventRouter.get("/", getEventsBySearch);

export default eventRouter;
