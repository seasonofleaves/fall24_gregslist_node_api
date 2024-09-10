import { Schema, trusted } from "mongoose";

export const HouseSchema = new Schema(
  {
    bedrooms: { type: Number, min: 0, max: 30, required: true },
    bathrooms: { type: Number, min: 0, max: 30, required: true },
    levels: { type: Number, min: 0, max: 30, required: true },
    imgUrl: { type: String, minlength: 0, maxlength: 500, required: true },
    year: { type: Number, min: 1600, max: 2025, required: true },
    price: { type: Number, min: 1000, max: 10000000, required: true },
    description: { type: String, minlength: 0, maxlength: 500, required: false },
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
