import { NextFunction, Request, Response } from "express";
import axios from "axios";
import { calculateFareInputSchema } from "../types";
import { formatDistance, formatTimeDuration } from "../utils/formatter";

const token =
  "pk.eyJ1IjoidWRkaXNoYXJtYSIsImEiOiJjbHk2dG84MGQwZHM1MmlwbncyMGNyYTloIn0.XCDf_s60HmJ7snDEBKjDSA";

interface Route {
  distance: number;
  duration: number;
}

interface DirectionsResponse {
  routes: Route[];
}

function calculateFare(
  distance: number,
  duration: number,
  vehicleType?: string,
): { [key: string]: string } {
  const fares: { [key: string]: string } = {};

  const vehicleTypes = vehicleType
    ? [vehicleType]
    : ["bike", "car", "autorickshaw"];

  vehicleTypes.forEach((type) => {
    let baseFare: number;
    let perKilometer: number;
    let perMinute: number;

    switch (type) {
      case "bike":
        baseFare = 20.0;
        perKilometer = 5.0;
        perMinute = 1.0;
        break;
      case "car":
        baseFare = 50.0;
        perKilometer = 12.0;
        perMinute = 3.0;
        break;
      case "autorickshaw":
        baseFare = 30.0;
        perKilometer = 8.0;
        perMinute = 2.0;
        break;
      default:
        throw new Error("Invalid vehicle type");
    }

    const distanceInKm = distance / 1000;
    const durationInMinutes = duration / 60;

    const totalFare =
      baseFare + perKilometer * distanceInKm + perMinute * durationInMinutes;
    fares[type] = totalFare.toFixed(2);
  });

  return fares;
}

async function getDirections(
  start: number[],
  end: number[],
  vehicleType?: string,
): Promise<{
  distance: string;
  duration: string;
  fares: { [key: string]: string };
}> {
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?access_token=${token}`;

  try {
    const response = await axios.get(url);
    const data: DirectionsResponse = response.data;
    const route = data.routes[0];

    const distance = route.distance;
    const duration = route.duration;

    const fares = calculateFare(distance, duration, vehicleType);
    return {
      distance: formatDistance(distance),
      duration: formatTimeDuration(duration),
      fares,
    };
  } catch (error) {
    console.error("Error getting directions:", error);
    throw error;
  }
}

export const calculateRideFare = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { start, end, vehicleType } = req.body;
  const parsed = calculateFareInputSchema.safeParse({
    start,
    end,
    vehicleType,
  });

  if (!parsed.success) {
    return res
      .status(400)
      .json({ message: "Invalid request data", errors: parsed.error.issues });
  }

  try {
    const result = await getDirections(
      parsed.data.start,
      parsed.data.end,
      parsed.data.vehicleType,
    );
    res.json(result);
  } catch (error) {
    console.error("Error calculating fare:", error);
    res.status(500).json({ error: "Error calculating fare" });
  }
};
