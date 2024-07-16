import { Router } from "express";
import { CalculateFare } from "../controllers/RideController";

export const rideRouter = Router();

rideRouter.post("/calculate-fare", CalculateFare);

export default rideRouter;
