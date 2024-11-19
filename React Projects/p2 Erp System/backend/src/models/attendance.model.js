const attendanceSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    studentAttendance: [
      {
        student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
        status: { type: String, enum: ["Present", "Absent", "Late"], required: true },
      },
    ],
  });
  
  export const Attendance = mongoose.model("Attendance", attendanceSchema);
  