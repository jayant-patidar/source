// Author: Jayant Patidar

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Store a hashed password
    DOB: { type: Date, required: true },
    phone: { type: String, required: true }, // Phone number as a string
    address: { type: String, required: true },
    seekerRating: { type: Number, default: 0, min: 0, max: 5 }, // Rating out of 5
    providerRating: { type: Number, default: 0, min: 0, max: 5 }, // Rating out of 5
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

module.exports = mongoose.model("User", User);
