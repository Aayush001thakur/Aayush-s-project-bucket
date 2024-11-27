import mongoose from "mongoose";
import bcrypt from "bcrypt";
const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    employeeId: { type: String, unique: true, required: true },
    subject: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
    classAssigned: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
    contactNumber: { type: String, required: false },
    email: { type: String, unique: false },
    password:{type: String},
    address: { type: String },
    joinDate: { type: Date, default: Date.now },
  });
  
  
teacherSchema.pre("save", async function (next){
   if(!this.isModified("password")) return next();
   this.password = bcrypt(this.password.hash, 10)
   next()
})

teacherSchema.methods.isPasswordCorrect = async function (password) {
  await bcrypt.compare(password, this.password)
}

teacherSchema.methods.generateAcessToken =  function () {
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
teacherSchema.methods.generateRefreshToken = async function () {
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

export const Teacher = mongoose.model("Teacher", teacherSchema);
