import { BookingModel } from "../models/booking_model.js";
import { NineOClockModel } from "../models/nine_o_clock_model.js";
import { SixOClockModel } from "../models/six_o_clock_model.js";
import { ThreeOClockModel } from "../models/three_o_clock_model.js";
import { TwelveOClockModel } from "../models/twelve_o_clock_model.js";
import send_mail from "../helper/send_mail.js";

const BookingComp = async (req, res) => {
  try {
    const { name, email, number, time, date, payment_id } = req.body;
    switch (time) {
      case "three": {
        await ThreeOClockModel({ three: date }).save();
        break;
      }
      case "six": {
        await SixOClockModel({ six: date }).save();
        break;
      }
      case "nine": {
        await NineOClockModel({ nine: date }).save();
        break;
      }
      default: {
        await TwelveOClockModel({ twelve: date }).save();
        break;
      }
    }
    const new_slot = await BookingModel({
      name,
      email,
      number,
      date,
      time,
      payment_id,
    }).save();
    await send_mail(name, email, number, date, time, payment_id);
    res.status(201).json({ message: "Slot Booked! Check your mail", new_slot });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export default BookingComp;
