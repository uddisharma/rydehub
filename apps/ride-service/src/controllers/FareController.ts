import { NextFunction, Request, Response } from "express";
import axios from "axios";
import { calculateFareInputSchema, CalculateFareType } from "../types";
import { formatDistance, formatTimeDuration } from "../utils/formatter";
import { RedisManager } from "../redis/RedisManager";

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
    console.error("Error getting directions:");
    throw error;
  }
}

export const CalculateFareAndDistance = async (
  reqData: CalculateFareType,
  clientId: string,
) => {
  const datatoProcess = calculateFareInputSchema.safeParse(reqData);
  if (!datatoProcess.success) {
    RedisManager.getInstance().sendToApi(clientId, {
      type: "FARE_CALCULATE",
      payload: {
        status: "ERROR",
        message: "Requested data is not correct",
        distance: "",
        duration: "",
        fares: {},
      },
    });
  } else {
    try {
      const { start, end, vehicleType } = datatoProcess?.data;
      const result = await getDirections(start, end, vehicleType);

      RedisManager.getInstance().sendToApi(clientId, {
        type: "FARE_CALCULATE",
        payload: {
          status: result ? "SUCCESS" : "ERROR",
          message: result
            ? "Fare calculated successfully"
            : "Error calculating fare",
          distance: result ? result.distance : "",
          duration: result ? result.duration : "",
          fares: result ? result.fares : {},
        },
      });
    } catch (error: any) {
      RedisManager.getInstance().sendToApi(clientId, {
        type: "FARE_CALCULATE",
        payload: {
          status: "ERROR",
          message: error?.message ?? "Something went wrong",
          distance: "",
          duration: "",
          fares: {},
        },
      });
    }
  }
};
