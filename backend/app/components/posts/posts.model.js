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
    pay: { type: Number, required: true },
    location: { type: String, required: true },
    preRequisite: { type: String, required: false }, // Optional field
    category: { type: String, required: true }, // e.g. "Transportation", "Cleaning", etc.
    status: {
      type: String,
      default: "open",
      enum: ["open", "accepted", "completed", "canceled"],
    }, // Task statuses
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    tags: { type: [String], required: false }, // Optional tags array
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model("Post", Post);
