import mongoose from "mongoose";

const three_o_clock_schema = mongoose.Schema({
  three: {
    type: String,
    required: true,
  },
});

export const ThreeOClockModel = mongoose.model("threes", three_o_clock_schema);
