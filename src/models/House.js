import { Schema } from "mongoose";

export const HouseSchema = new Schema(
  {
    // Properties from UML go here!
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
