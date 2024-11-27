import { Router } from "express";
import { createTeacher } from "../controllers/createTeacher.controller.js";

const teacherRoute = Router();
teacherRoute.route("/register/teacher").post(createTeacher);

export default teacherRoute;
