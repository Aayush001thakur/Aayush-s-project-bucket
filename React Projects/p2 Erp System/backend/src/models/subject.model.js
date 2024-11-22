import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Example: "Mathematics"
    code: { type: String, unique: true, required: true }, // Example: "MATH101"
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
  });
  
  export const Subject = mongoose.model("Subject", subjectSchema);
  