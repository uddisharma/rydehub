import { NextFunction, Request, Response } from "express";
import { RedisManager } from "../redis/RedisManager";
import { LOGIN, REGISTER } from "../types/index";
import { TO_USER } from "../redis/Instances";
import { HandleError } from "../middleware/error-handler";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, password } = req.body;
    const response = await RedisManager.getInstance().sendAndAwait(TO_USER, {
      type: REGISTER,
      data: {
        name,
        email,
        password,
      },
    });
    res.status(200).send({ response });
  } catch (error) {
    HandleError(error, next);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;
    const response = await RedisManager.getInstance().sendAndAwait(TO_USER, {
      type: LOGIN,
      data: {
        email,
        password,
      },
    });
    res.status(200).send({ response });
  } catch (error: any) {
    HandleError(error, next);
  }
};
