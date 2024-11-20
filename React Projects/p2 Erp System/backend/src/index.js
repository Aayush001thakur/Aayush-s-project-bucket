import dotenv from "dotenv";
import express from "express";
import connectDB from "../src/db/index.js"; // Ensure this function is implemented correctly

// Load environment variables
dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Define routes
app.get("/", (req, res) => {
  res.send("Welcome to the School ERP backend!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
