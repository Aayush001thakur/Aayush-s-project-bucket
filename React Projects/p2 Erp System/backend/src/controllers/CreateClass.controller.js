import { asyncHandler } from "../utils/aynscHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Apiresponse } from "../utils/Apiresponse.js";
import grade from "../models/class.model.js";

const CreateClass = asyncHandler(async (req, res) =>{
    const {name, section , classTeacher, students} = req.body
    console.log(name , section , classTeacher , students); 

    const classes = await grade.create({
        name,
        section,
        classTeacher,
        students
    })

    if(!classes){
        throw new ApiError(500,"Something went wrong please try again");
    }

    return res.status(201).json(
        new Apiresponse(200, classes, "Class registered Sucessfully")
     )
} )

const FetchClass =  asyncHandler(async (req , res) =>{
    try {
        const classes = await grade.find();
        res.status(200).json({
            success: true,
            data: classes,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Failed to fetch classes",
            error: error.message,
        });
    }
})

export  {CreateClass, FetchClass}