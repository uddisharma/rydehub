import { loginUser, registerUser } from "../controllers/UserController";
import { MessageFromApIGateway } from "../types/from";
import { LOGIN, REGISTER } from "../types/index";

export class UserService {

    async process({ message, clientId }: { message: MessageFromApIGateway, clientId: string }) {
        switch (message.type) {
            case REGISTER:
                await registerUser(message.data, clientId);

                break;

            case LOGIN: {
                await loginUser(message.data, clientId);

                break;
            }
        }
    }
}
