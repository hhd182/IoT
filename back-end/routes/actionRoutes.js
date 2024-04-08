import { Router } from "express";
import { newAction, getDataAction } from "../controller/actionCtrl.js";

const actionRoutes = Router();

actionRoutes.post('/new', newAction);
actionRoutes.get('/search', getDataAction);

export default actionRoutes;