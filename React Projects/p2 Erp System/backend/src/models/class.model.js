import { response } from "express";
import mongoose from "mongoose";
const classSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Example: "10th Grade"
    section: { type: String, required: true }, // Example: "A"
    classTeacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  });
  
  const grade = mongoose.model("Class", classSchema);
   export default grade;