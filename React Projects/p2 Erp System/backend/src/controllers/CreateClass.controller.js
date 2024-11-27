import { asyncHandler } from "../utils/aynscHandler";
import { ApiError } from "../utils/ApiError";
import { Apiresponse } from "../utils/Apiresponse";

const CreateClass = asyncHandler(async (req, res) =>{
    const {name, section , classTeacher, students} = req.body
    console.log(name , section, classTeacher , students); 

    const existedClass = await Teacher.findOne(
        {
           $or:[ {name: lowerCaseName}, {section} ]
        }
    )

    if(existedClass){
       throw new  ApiError.res(409, "Class already Exist")
    }

    const classes = await grade.create({
        name,
        section
    })

    const createdClass =    await classes.findById(classes._id);

    if(!createdClass){
        throw new ApiError(500,"SOmething went wrong please try again");
    }

    return res.status(201).json(
        new Apiresponse(200, createdClass, "Class registered Sucessfully")
     )
} )