import express from "express";
import { trending } from "../controllers/videosController";
import {join} from "../controllers/usersController";

const globalRouter=express.Router();



globalRouter.get("/",trending);
globalRouter.get("/join",join);

export default globalRouter;