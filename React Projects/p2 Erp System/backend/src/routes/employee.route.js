import { Router } from "express";
import { createEmployee } from "../controllers/employee.controller.js";
import { getEmployee , deleteEmployee } from "../controllers/employee.controller.js";
const employeeRoute = Router();
employeeRoute.route('/register/employee').post(createEmployee)
employeeRoute.route('/employees').get(getEmployee);
employeeRoute.route('/:employeeId').delete(deleteEmployee);
export default employeeRoute