import { Student } from "../models/student.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/aynscHandler.js";
import jwt from "jsonwebtoken";
export const verfiyJwt = asyncHandler(async(req ,_, next) =>{
try {
    const token = req.cookies?.accessToken || req.header
    ("Authorization")?.replace("Bearer ","")
        if(!token){
            throw new ApiError(401, "unauthorized request")
        }
        const decodedtoekn = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user =    await Student.findById(decodedtoekn?._id).select("-password -refreshToken")
    
        if(!user){
            throw new ApiError(401,"Invalid Acess Token")
        }
        req.student = user;
        next()
} catch (error) {
    throw new ApiError(401,error?.message || "Invalid access Token")    
}
} )
