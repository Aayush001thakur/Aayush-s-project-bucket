const classSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Example: "10th Grade"
    section: { type: String, required: true }, // Example: "A"
    classTeacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  });
  
  export const Class = mongoose.model("Class", classSchema);
  