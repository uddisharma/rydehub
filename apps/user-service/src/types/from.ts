import { FARE_CALCULATE, LOGIN, REGISTER } from "./index";

export type MessageFromApIGateway =
  | {
      type: typeof REGISTER;
      data: {
        name: string;
        email: string;
        password: string;
      };
    }
  | {
      type: typeof LOGIN;
      data: {
        email: string;
        password: string;
      };
    }
  | {
      type: typeof FARE_CALCULATE;
      data: {
        start: number[];
        end: number[];
        vehicleType: string;
      };
    };
