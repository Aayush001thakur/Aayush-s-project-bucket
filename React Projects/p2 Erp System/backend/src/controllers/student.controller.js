import { asyncHandler } from "../utils/aynscHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Student } from "../models/student.model.js";
import { Apiresponse } from "../utils/Apiresponse.js";
import jwt from "jsonwebtoken";
const  generateAccessAndRefreshTokens = async(rollNumber) => {
    try {
        const user = await Student.findOne(rollNumber)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave : false})

        return {accessToken , refreshToken}
    } catch (error) {
        console.error("Error in generateAccessAndRefreshTokens:", error);
        throw new ApiError(500, "Something went wrong while generating access and refresh token")    
    }
} 



const registerUser = asyncHandler( async (req, res) =>{
   
    const {name,  password, rollNumber } = req.body
    console.log( "name :", name ,"pass :", password);

    if([name , password ].some((field) =>
        field?.trim() =="")){
        throw new   ApiError(400, "All fields are required");
    }

    const lowerCaseName = name ? name.toLowerCase() : null;


    const existedStudent = await Student.findOne(
            {
               $or:[ {name: lowerCaseName}, {rollNumber} ]
            }
    )

    if(existedStudent){
        throw new ApiError(409, "User with email or rollNumber Already Exist")
    }

   const newStudents =  await Student.create({
        name: lowerCaseName,
        rollNumber,
        password

    })

const createdStudent =    await Student.findById(newStudents._id).select("-password")

if(!createdStudent){
    throw new ApiError(500 , "Something went wrong while registering user")
}

return res.status(201).json(
   new Apiresponse(200, createdStudent, "Student registered Sucessfully")
)

})  

const loginUser = asyncHandler(async (req, res) =>{
    console.log(req.body); 
    // take input from user via a form
    // validate if input is correct 
    // Validate input with stored data in db
    // If matched allow to login
    // Send Cookies {tokens}
    const {rollNumber, password} = req.body
    if(!rollNumber){
        throw new ApiError(400, "rollNumber Is Required")
    }

    const student   = await  Student.findOne({rollNumber})
    if(!student) {
        throw new ApiError(404 , "Roll Number Does Not Exist")
    }
console.log(password);
   const isPasswordValid = await student.isPasswordCorrect(password)
   if(!isPasswordValid) {
    throw new ApiError(401 , "Please Enter Correct Password")
    }
    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(Student._id)

    const LoggedInUser = await Student.findById(student._id).select("-password -refreshToken")
    console.log(LoggedInUser);
    const option = {
        httpOnly: true,
        secure: true
    }
    res.status(200)
    .cookie("accessToken", accessToken, { httpOnly: true, secure: true })
    .cookie("refreshToken", refreshToken, { httpOnly: true, secure: true })
    .json({
        user: LoggedInUser,
        accessToken,
        refreshToken,
        message: "User Logged In Successfully"
    })
    
}) 

const logoutUser = asyncHandler(async (req, res) => {
    // Update the user's refreshToken in the database
    console.log("req.student:", req.student);
    await Student.findByIdAndUpdate(req.student._id, { $set: { refreshToken: undefined } });
    // Clear cookies
    const options = {
        httpOnly: true,
        secure: true, // Ensure secure is true for production
    };

    return res
        .status(200) // Corrected 'statur' to 'status'
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new Apiresponse(200, {}, "User Logged Out"));
});

const refreshAcessToken = asyncHandler( async(req, res) =>{
try {
        const incomingRefreshToken =  req.cookies.refreshToken || req.body.refreshToken
        if (!incomingRefreshToken){
            throw new ApiError(401, "unauthorized request");
        }
    
        const decodedToken = jwt.verify(
            incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await Student.findById(decodedToken?._id)
    
        if(!user){
            throw new ApiError(401, "Invalid Acess");
        }
    
        if(incomingRefreshToken !== user?.refreshToken){
            throw new ApiError(401, "Refresh Token is Expired or Used")
        }
        const options ={
            httpOnly: true,
            secure: true
        }
    
        const {accessToken , newRefreshToken} = await generateAccessAndRefreshTokens(user._id);
        return res
        .status(200)
        .cookie("accessToken", accessToken , options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new Apiresponse(
                200,
                {accessToken, refreshToken: newRefreshToken },
                "Acess Token Refreshed"
            )
        )
} catch (error) {
    throw new ApiError(401, error?.message || "Invalid Refresh Token");
}

})

const changeUserPassword = asyncHandler(async(req, res) =>{
    const {oldPassword, newPassword} = req.body
    const user = await Student.findById(req.student?._id);
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
    if(!isPasswordCorrect){
        throw new ApiError(400 , "Invalid Old Password");
    }
    user.password = newPassword
    await user.save({validateBeforeSave: false})
    return res
    .status(200)
    .json(new Apiresponse(200, {}, "Password Changed Sucessfully"))
})

export 
{
    registerUser , loginUser , logoutUser, refreshAcessToken
}