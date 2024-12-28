import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/student.controller.js";
import { verfiyJwt } from "../middlewares/auth.middleware.js";
import { refreshAcessToken } from "../controllers/student.controller.js";
const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

// Secured Routes
router.route("/logout").post(verfiyJwt, logoutUser)
router.route("/refresh-token").post(refreshAcessToken)
export default router