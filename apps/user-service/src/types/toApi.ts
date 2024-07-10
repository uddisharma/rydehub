


export type MessageToApiGateway = {
    type: "REGISTER",
    payload: {
        status: "SUCCESS" | "ERROR",
        message: string
    }
} | {
    type: "LOGIN",
    payload: {
        status: "SUCCESS" | "ERROR",
        message: string
        token: string
    }
} | {
    type: "REGISTER_SAVE",
    payload: {
        status: "SUCCESS" | "ERROR",
        message: string
    }
}