const feeSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    amount: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    paid: { type: Boolean, default: false },
    paymentDate: { type: Date },
  });
  
  export const Fee = mongoose.model("Fee", feeSchema);
  