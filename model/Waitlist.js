import mongoose, { Schema } from "mongoose";

const waitListSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isCommunity: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Waitlist =
  mongoose.models.Waitlist || mongoose.model("Waitlist", waitListSchema);

export default Waitlist;
