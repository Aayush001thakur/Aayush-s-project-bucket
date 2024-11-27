import { asyncHandler } from "../utils/aynscHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Student } from "../models/student.model.js";
import { Apiresponse } from "../utils/Apiresponse.js";
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

   const Students =  await Student.create({
        name: lowerCaseName,
        rollNumber,
        password

    })

const createdStudent =    await Students.findById(Student._id).select("-password")

if(!createdStudent){
    throw new ApiError(500 , "Something went wrong while registering user")
}

return res.status(201).json(
   new Apiresponse(200, createdStudent, "Student registered Sucessfully")
)

})  


export {registerUser} 