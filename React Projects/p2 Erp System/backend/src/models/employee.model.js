import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    employeeId: { type: Number, required: true, unique: true },
    department: { type: String, }, 
    employeeRole: { type: String,  }, 
    dateOfBirth: { type: Date }, 
    dateOfJoining: { type: Date, },
    contactNumber: { type: String, }, 
    address: { 
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zipCode: { type: String }
    }, 
    salary: { type: Number }, 
    qualifications: { type: [String] }, 
    experienceYears: { type: Number }, 
    isActive: { type: Boolean, default: true }, 
    emergencyContact: {
        name: { type: String },
        relationship: { type: String }, // Example: "Spouse", "Parent"
        contactNumber: { type: String }
    }, 
    profilePicture: { type: String }, 
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now } });

// Middleware to update `updatedAt` field automatically
EmployeeSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

export const Employee = mongoose.model("Employee", EmployeeSchema);
