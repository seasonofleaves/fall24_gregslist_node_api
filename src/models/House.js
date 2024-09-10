import { Schema } from "mongoose";

const HouseSchema = new Schema(
  {
    // Properties from UML go here!
  },
  { timestamps: true, toJSON: { virtuals: true } }
);