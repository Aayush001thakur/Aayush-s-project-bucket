import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    employeeId: { type: String, unique: true, required: true },
    subject: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
    classAssigned: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
    contactNumber: { type: String, required: true },
    email: { type: String, unique: true },
    address: { type: String },
    joinDate: { type: Date, default: Date.now },
  });
  
  export const Teacher = mongoose.model("Teacher", teacherSchema);
  