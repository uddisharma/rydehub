import { LOGIN, REGISTER, REGISTER_SAVE, LOGIN_SAVE } from "./toApi";

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
      type: typeof REGISTER_SAVE;
      data: {
        name: string;
        email: string;
        password: string;
        clientId: string;
      };
    }
  | {
      type: typeof LOGIN_SAVE;
      data: {
        email: string;
        password: string;
        clientId: string;
      };
    };
