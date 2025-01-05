import { asyncHandler } from "../utils/aynscHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Apiresponse } from "../utils/Apiresponse.js";
import { Employee } from "../models/employee.model.js";

const createEmployee = asyncHandler(async (req, res) => {
    const { name, employeeId , employeeRole } = req.body;

    console.log(req.body);
    console.log("name:", name, "id:", employeeId , "Role: ", employeeRole);

    // Validate required fields
    if ([name, employeeId , employeeRole].some(field => !field || field.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    // Normalize the name for comparison
    const lowerCaseName = name.trim().toLowerCase();

    try {
        // Check if the employee already exists
        const existedEmployee = await Employee.findOne({
            $or: [{ name: lowerCaseName }, { employeeId }]
        });

        if (existedEmployee) {
            const field = existedEmployee.employeeId === employeeId ? "Employee ID" : "Name";
            throw new ApiError(409, `${field} already exists`);
        }

        // Create new employee
        const newEmployee = await Employee.create({
            name: lowerCaseName, // Optionally store name in lowercase for consistency
            employeeId,
            employeeRole
        });

        return res.status(201).json(
            new Apiresponse(201, newEmployee, "Employee registered successfully")
        );
    } catch (err) {
        // Handle duplicate key error (e.g., from MongoDB)
        if (err.code === 11000) {
            console.log('error is here', err);
            throw new ApiError(409, "Employee ID already exists");
        }

        // Re-throw other errors
        
        throw new ApiError(500, "An error occurred while creating the employee");
    }
});

const getEmployee = asyncHandler(async (req, res) =>{
    try {
        const employees = await Employee.find();
        res.status(200).json({
            success: true,
            data: employees,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Failed to fetch employees",
            error: error.message,
        });
    }
})

const deleteEmployee = asyncHandler(async (req, res) => {
    const { employeeId } = req.params; // Extract employeeId from request parameters

    try {
        // Find and delete the employee by employeeId
        const deletedEmployee = await Employee.findOneAndDelete({ employeeId });

        if (!deletedEmployee) {
            // If no employee is found with the provided ID, throw an error
            throw new ApiError(404, "Employee not found");
        }

        // If deletion is successful, return a success response
        res.status(200).json(
            new Apiresponse(200, null, "Employee deleted successfully")
        );
    } catch (err) {
        // Handle errors
        console.log("error is ", err);
        throw new ApiError(500, "An error occurred while deleting the employee", err);
    }
});
export {
    createEmployee,
    getEmployee,
    deleteEmployee
};
