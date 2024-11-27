import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: false },
  rollNumber: { type: String, unique: true, required: false },
  standard: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: false },
  age: { type: Number, required: false },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: false },
  address: { type: String },
  password: { type: String, required: false },
  contactNumber: { type: String, required: false },
  refreshToken: { type: String },
  guardian: {
    name: { type: String },
    contactNumber: { type: String },
    relation: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
});

// Pre-save hook to hash the password
studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10); // Corrected usage
  next();
});

// Method to compare passwords
studentSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Method to generate an access token
studentSchema.methods.generateAccessToken = function () {
  return jsonwebtoken.sign(
    {
      _id: this._id,
      name: this.name,
      rollNumber: this.rollNumber,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

// Method to generate a refresh token
studentSchema.methods.generateRefreshToken = function () {
  return jsonwebtoken.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const Student = mongoose.model("Student", studentSchema);
