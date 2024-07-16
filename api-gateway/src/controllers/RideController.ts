import { NextFunction, Request, Response } from "express";
import { RedisManager } from "../redis/RedisManager";
import { FARE_CALCULATE, LOGIN, REGISTER } from "../types/index";
import { TO_RIDE, TO_USER } from "../redis/Instances";
import { HandleError } from "../middleware/error-handler";

export const CalculateFare = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { vehicleType, start, end } = req.body;
    const response = await RedisManager.getInstance().sendAndAwait(TO_RIDE, {
      type: FARE_CALCULATE,
      data: {
        vehicleType,
        start,
        end,
      },
    });
    res.status(200).send({ response });
  } catch (error) {
    HandleError(error, next);
  }
};
