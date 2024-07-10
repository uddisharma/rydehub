import express from "express";
import {
  setSession,
  getSession,
  destroySession,
  getCookies,
} from "../controllers/sessionController";

const router = express.Router();

router.post("/setSession", setSession);

router.get("/getSession", getSession);

router.post("/destroySession", destroySession);

router.get("/getCookies", getCookies);

export default router;
