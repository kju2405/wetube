import express from "express";
import {edit,remove,logout,see} from "../controllers/usersController";


const userRouter=express.Router();



userRouter.get("/edit",edit);
userRouter.get("/delete",remove);
userRouter.get("/logout",logout);
userRouter.get("/:id",see);

export default userRouter;