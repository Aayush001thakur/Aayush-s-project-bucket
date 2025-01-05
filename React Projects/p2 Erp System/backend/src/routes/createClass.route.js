import { Router } from "express";
import {CreateClass , FetchClass} from "../controllers/CreateClass.controller.js";


const Classroute = Router()

Classroute.route('/createClass').post(CreateClass);
Classroute.route('/getClass').get(FetchClass);


export default Classroute