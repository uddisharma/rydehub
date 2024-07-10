import { Router } from "express";
import calculateRideFareRoute from "./FareCalculateRoute";

const router = Router();

router.use(calculateRideFareRoute);

export default router;
