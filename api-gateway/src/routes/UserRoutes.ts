import { Router } from "express";
import { loginUser, registerUser } from "../controllers/UserController";

export const userRouter = Router();

userRouter.post("/signup", registerUser);

userRouter.post("/login", loginUser);

export default userRouter;
