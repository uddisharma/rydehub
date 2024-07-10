import { FARE_CALCULATE, LOGIN, REGISTER } from "./index";

export type MessageFromApIGateway = {
  type: typeof FARE_CALCULATE;
  data: {
    start: [number, number];
    end: [number, number];
    vehicleType?: "car" | "bike" | "autorickshaw" | undefined;
  };
};
