import { REGISTER, LOGIN, FARE_CALCULATE } from "./index";

export type MessageToServices =
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
        vehicleType?: string;
      };
    };
