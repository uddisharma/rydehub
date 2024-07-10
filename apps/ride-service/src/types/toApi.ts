export type MessageToApiGateway = {
  type: "FARE_CALCULATE";
  payload: {
    status: "SUCCESS" | "ERROR";
    message: string;
    distance: string;
    duration: string;
    fares: { [key: string]: string };
  };
};
