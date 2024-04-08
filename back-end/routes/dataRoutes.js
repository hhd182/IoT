import { Router } from "express";
import { newDataSensor, getFirstData, getDataSensor, sortByColumnMinToMax } from "../controller/dataCtrl.js";

const dataRoutes = Router();

dataRoutes.get('/', getFirstData);
dataRoutes.get('/search', getDataSensor);
dataRoutes.post('/new', newDataSensor);
dataRoutes.get('/sort', sortByColumnMinToMax)

export default dataRoutes;