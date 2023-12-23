import mongoose from "mongoose";

const nine_o_clock_schema = mongoose.Schema({
  nine: {
    type: String,
    required: true,
  },
});

export const NineOClockModel = mongoose.model("nines", nine_o_clock_schema);
