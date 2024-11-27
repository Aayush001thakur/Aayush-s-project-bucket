import { asyncHandler } from "../utils/aynscHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Apiresponse } from "../utils/Apiresponse.js";
import { Teacher } from "../models/teacher.model.js";
const createTeacher = asyncHandler( async(req, res) =>{

    const {name , employeeId} = req.body
    console.log( "name:" ,name , "employeeId:", employeeId );
    if([name , employeeId ].some((field) =>
        field?.trim() =="")){
        throw new   ApiError(400, "All fields are required");
    }

    const lowerCaseName = name ? name.toLowerCase() : null;

    const existedTeacher = await Teacher.findOne(
        {
           $or:[ {name: lowerCaseName}, {employeeId} ]
        }
)

if(existedTeacher){
    throw new ApiError(409, "User with email or rollNumber Already Exist")
}

const Teachers =  await Teacher.create({
    name: lowerCaseName,
    employeeId,

})
const createdTeacher =    await Teacher.findById(Teachers._id)
if(!createdTeacher){
    throw new ApiError(500 , "Something went wrong while registering user")
}

return res.status(201).json(
    new Apiresponse(200, createdTeacher, "Teacher registered Sucessfully")
 )


})

 export {createTeacher}