import { Router } from "express";
import { getAllStudent, loginUser, logoutUser, registerUser } from "../controllers/student.controller.js";
import { verfiyJwt } from "../middlewares/auth.middleware.js";
import { refreshAcessToken } from "../controllers/student.controller.js";
const studentrouter = Router()

studentrouter.route("/register").post(registerUser)
studentrouter.route("/login").post(loginUser)
studentrouter.route("/students").get(getAllStudent)

// Secured Routes
studentrouter.route("/logout").post(verfiyJwt, logoutUser)
studentrouter.route("/refresh-token").post(refreshAcessToken)
export default studentrouter