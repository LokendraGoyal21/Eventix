import express from "express";
const bookingRouter = express.Router();
import {
  bookEvent,
  confirmBooking,
  getMyBookings,
  cancelBooking,
  sendBookingOTP,
} from "../controllers/bookingController.js";
import { protect, admin } from "../middleware/auth.js";

bookingRouter.post("/send-otp", protect, sendBookingOTP);
bookingRouter.post("/", protect, bookEvent);
bookingRouter.put("/:id/confirm", protect, admin, confirmBooking);
bookingRouter.get("/my", protect, getMyBookings);
bookingRouter.delete("/:id", protect, cancelBooking);

export default  bookingRouter;
