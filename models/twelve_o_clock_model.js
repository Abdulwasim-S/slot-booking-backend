import mongoose from "mongoose";

const twelve_o_clock_schema = mongoose.Schema({
  twelve: {
    type: String,
    required: true,
  },
});

export const TwelveOClockModel = mongoose.model(
  "twelves",
  twelve_o_clock_schema
);
