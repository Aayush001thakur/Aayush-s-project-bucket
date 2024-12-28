import dotenv from "dotenv";
import express from "express";
import connectDB from "../src/db/index.js";
import UserRouter from './routes/student.routes.js'
import teacherRoute from "./routes/teacher.routes.js"
import cors from 'cors';
import cookieParser from "cookie-parser";
// Load environment variables
dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 4000;
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true,              // Allow cookies and credentials
};


// Middleware
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"))
app.use(cookieParser())
app.use(cors(corsOptions));

app.use("/api/v1/user", UserRouter)

app.use("/api/v1/user", teacherRoute)

// Connect to the database
connectDB();

// Define routes
app.get("/",(req, res,next) =>{console.log('middleware initaited');
  next()}, 
(req, res) => {
  res.send("Welcome to the School ERP backend!");
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export {app}