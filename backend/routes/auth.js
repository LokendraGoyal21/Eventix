import express from "express";
import { register, login, verifyOTP } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/verify-otp", verifyOTP);

export default authRouter;
