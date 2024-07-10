export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const REGISTER_SAVE = "REGISTER_SAVE";
export const LOGIN_SAVE = "LOGIN_SAVE";
export const FARE_CALCULATE = "FARE_CALCULATE";

import { z } from "zod";

const vehicleSchema = z.enum(["bike", "car", "autorickshaw"]);
const coordinateSchema = z.tuple([z.number(), z.number()]);
export const calculateFareInputSchema = z.object({
  start: coordinateSchema,
  end: coordinateSchema,
  vehicleType: vehicleSchema?.optional(),
});

export type CalculateFareType = z.infer<typeof calculateFareInputSchema>;
