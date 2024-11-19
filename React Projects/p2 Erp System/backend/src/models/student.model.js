import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, unique: true, required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  address: { type: String },
  contactNumber: { type: String, required: true },
  guardian: {
    name: { type: String },
    contactNumber: { type: String },
    relation: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
});

export const Student = mongoose.model("Student", studentSchema);
