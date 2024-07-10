import { Router } from "express";
import { calculateRideFare } from "../controllers/CalculatefareController";

const router = Router();

router.route("/fare-estimate").post(calculateRideFare);

export default router;
