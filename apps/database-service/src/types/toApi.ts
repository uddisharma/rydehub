export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const REGISTER_SAVE = "REGISTER_SAVE";
export const LOGIN_SAVE = "LOGIN_SAVE";

export type MessageToApiGateway =
  | {
      type: "REGISTER";
      payload: {
        status: "SUCCESS" | "ERROR";
        message: string;
      };
    }
  | {
      type: "LOGIN";
      payload: {
        status: "SUCCESS" | "ERROR";
        message: string;
        token: string;
      };
    }
  | {
      type: "REGISTER_SAVE";
      payload: {
        status: "SUCCESS" | "ERROR";
        message: string;
      };
    }
  | {
      type: "LOGIN_SAVE";
      payload: {
        status: "SUCCESS" | "ERROR";
        message: string;
        token: string;
      };
    };
