import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, unique: true, required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  address: { type: String },
  password: {type: String},
  contactNumber: { type: String, required: true },
  guardian: {
    name: { type: String },
    contactNumber: { type: String },
    relation: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
});

studentSchema.pre("save", async function (next){
  if(!this.isModified("password") ) return next();
  this.password = bcrypt(this.password.hash, 10)
  next()
})

studentSchema.methods.isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password, this.password)

}

studentSchema.methods.generateAcessToken =  function () {
   return  jsonwebtoken.sign(
      {
        _id: this._id,
        email: this.email,
        name: this.name 
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
    )


}
studentSchema.methods.generateRefreshToken = async function () {
  return  jsonwebtoken.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )




}


export const Student = mongoose.model("Student", studentSchema);
