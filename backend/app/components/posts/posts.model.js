// Author: Jayant Patidar

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    }, // Provider is optional until accepted
    seekerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Seeker is required
    jobDate: { type: Date, required: true },
    jobTime: { type: String, required: true }, // Can be a string in format "HH:MM AM/PM"
    originalPay: { type: Number, required: true }, // Original Pay amount
    updatedPay: [
      {
        pay: { type: Number, required: true }, // Updated Pay amount
        updatedAt: { type: Date, default: Date.now }, // Date when the pay was updated
      },
    ],
    location: {
      general: { type: String, required: true }, // General public location
      exact: { type: String, required: true }, // Exact location (more private)
    },
    visibility: {
      type: Boolean,
      default: true, // Controls privacy (e.g., whether location is exact or general)
    },

    isNegotiable: { type: Boolean, default: false }, // Whether pay is negotiable
    expirationDate: { type: Date, required: true }, // Expiration date for the job post
    category: { type: String, required: true }, // e.g. "Transportation", "Cleaning", etc.
    status: {
      type: String,
      default: "open",
      enum: ["open", "accepted", "completed", "canceled"],
    }, // Task statuses
    type: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    tags: { type: [String], required: false }, // Optional tags array
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model("Post", Post);
