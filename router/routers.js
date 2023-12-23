import express from "express";
import WelcomeComp from "../component/welcome.js";
import BookingComp from "../component/booking.js";
import BookingListComp from "../component/booking_list.js";

const router = express.Router();

// WELCOME
router.get("/", WelcomeComp);

// Bookings
router.get("/booking", BookingListComp);
// router.get("/user", UsersComp);
router.post("/booking", BookingComp);

export default router;
