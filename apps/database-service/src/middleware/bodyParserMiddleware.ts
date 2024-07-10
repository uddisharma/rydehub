import bodyParser from "body-parser";
import { RequestHandler } from "express";

export const jsonParser: RequestHandler = bodyParser.json();
