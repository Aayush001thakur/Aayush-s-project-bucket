import dotenv from "dotenv";
import express from "express";
import connectDB from "../src/db/index.js";
import UserRouter from './routes/student.routes.js';
import teacherRoute from "./routes/teacher.routes.js";
import employeeRoute from "./routes/employee.route.js";
import Classroute from "./routes/createClass.route.js";
import studentrouter from "./routes/student.routes.js";
import cors from 'cors';
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 4000;
const corsOptions = {
origin: 'http://localhost:5173', 
  credentials: true,             
};

// Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors(corsOptions));

// Define routes
app.use("/api/v1/user", UserRouter); // For student-related routes
app.use("/api/v1/teacher", teacherRoute); // For teacher-related routes
app.use("/api/v1/employee", employeeRoute); // For employee-related routes
app.use("/api/v1/class", Classroute);
app.use("/api/v1/student" , studentrouter)
// Connect to the database
connectDB();

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to the School ERP backend!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export { app };
