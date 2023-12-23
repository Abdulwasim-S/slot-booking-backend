import { NineOClockModel } from "../models/nine_o_clock_model.js";
import { SixOClockModel } from "../models/six_o_clock_model.js";
import { ThreeOClockModel } from "../models/three_o_clock_model.js";
import { TwelveOClockModel } from "../models/twelve_o_clock_model.js";

const BookingListComp = async (req, res) => {
  try {
    let three = await ThreeOClockModel.find();
    let six = await SixOClockModel.find();
    let nine = await NineOClockModel.find();
    let twelve = await TwelveOClockModel.find();
    const three_result = three.map((ele) => {
      return ele.three;
    });
    const six_result = six.map((ele) => {
      return ele.six;
    });
    const nine_result = nine.map((ele) => {
      return ele.nine;
    });
    const twelve_result = twelve.map((ele) => {
      return ele.twelve;
    });
    const booked_dates = {
      three: three_result,
      six: six_result,
      nine: nine_result,
      twelve: twelve_result,
    };
    res.status(200).json({ message: "data", booked_dates });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export default BookingListComp;
