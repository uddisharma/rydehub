import { LOGIN_SAVE, REGISTER_SAVE } from "."


export type MessageToDbService = {
    type: typeof REGISTER_SAVE,
    data: {
        name: string,
        email: string,
        password: string
        clientId: string
    }
} | {
    type: typeof LOGIN_SAVE,
    data: {
        email: string,
        password: string,
        clientId: string
    }
} 