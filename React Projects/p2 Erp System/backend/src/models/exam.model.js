const examSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Example: "Mid-Term Exam"
    class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    date: { type: Date, required: true },
    results: [
      {
        student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
        marksObtained: { type: Number },
        totalMarks: { type: Number, required: true },
      },
    ],
  });
  
  export const Exam = mongoose.model("Exam", examSchema);
  