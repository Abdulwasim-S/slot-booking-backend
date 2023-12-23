import mongoose from "mongoose";

const six_o_clock_schema = mongoose.Schema({
  six: {
    type: String,
    required: true,
  },
});

export const SixOClockModel = mongoose.model("sixs", six_o_clock_schema);
