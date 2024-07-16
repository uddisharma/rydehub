export type MessageFromServices =
  | {
      type: "REGISTER";
      payload: {
        status: number;
        message: string;
      };
    }
  | {
      type: "LOGIN";
      payload: {
        status: number;
        message: string;
        token: string;
      };
    }
  | {
      type: "FARE_CALCULATE";
      payload: {
        status: string;
        message: string;
        distance: string;
        duration: string;
        fares: { [key: string]: string };
      };
    };
