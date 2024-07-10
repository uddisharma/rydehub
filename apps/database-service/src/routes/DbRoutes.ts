import { LoginUser, RegisterUser } from "../controllers/UserController";
import { MessageFromApIGateway } from "../types/from";
import { LOGIN_SAVE, REGISTER_SAVE } from "../types/toApi";

export class DbService {

    async process({ message }: { message: MessageFromApIGateway, clientId: string }) {

        switch (message.type) {
            case REGISTER_SAVE:
                RegisterUser({ message: message.data, clientId: message.data.clientId });

                break;

            case LOGIN_SAVE: {
                LoginUser({ message: message.data, clientId: message.data.clientId });

                break;
            }
        }
    }
}



