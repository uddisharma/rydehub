import { hashPassword, generateToken } from "../services/utils";
import { RedisManager } from "../redis/RedisManager";
import * as bcrypt from 'bcrypt';
import PrismaSingleton from "../utils/PrimaClient";

const prisma = PrismaSingleton.getInstance()

interface RegisterType {
    name: string,
    email: string,
    password: string
    clientId: string
}

type LoginType = Pick<RegisterType, "email" | "password">

export const RegisterUser = async ({ message, clientId }: { message: RegisterType, clientId: string }) => {

    console.log(message)
    try {

        const hashedPassword = await hashPassword(message.password);

        const exists = await prisma.user.findUnique({
            where: { email: message.email },
        });

        if (exists) {
            RedisManager.getInstance().sendToApi(clientId, {
                type: "REGISTER",
                payload: {
                    "status": "ERROR",
                    "message": "User already exists",
                }
            });
            return;
        }

        const response = await prisma.user.create({
            data: {
                email: message.email,
                name: message.name ?? '',
                password: hashedPassword,
            },
        });

        RedisManager.getInstance().sendToApi(clientId, {
            type: "REGISTER",
            payload: {
                "status": response?.id ? "SUCCESS" : "ERROR",
                "message": response?.id ? "User registered successfully" : "Something went wrong",
            }
        });

    } catch (e: any) {
        RedisManager.getInstance().sendToApi(clientId, {
            type: "REGISTER",
            payload: {
                "status": "ERROR",
                "message": e?.message || "Something went wrong",
            }
        });
    }
}


export const LoginUser = async ({ message, clientId }: { message: LoginType, clientId: string }) => {
    try {

        const user = await prisma.user.findUnique({
            where: { email: message.email },
        });

        if (!user) {
            RedisManager.getInstance().sendToApi(clientId, {
                type: "LOGIN",
                payload: {
                    "status": "ERROR",
                    "message": "User not found",
                    token: ""
                }
            });
            return;
        }

        const passwordMatches = await bcrypt.compare(message.password, user.password);

        if (!passwordMatches) {
            RedisManager.getInstance().sendToApi(clientId, {
                type: "LOGIN",
                payload: {
                    "status": "ERROR",
                    "message": "Invalid password",
                    token: ""
                }
            });
            return;
        }

        const token = await generateToken(user.id);

        RedisManager.getInstance().sendToApi(clientId, {
            type: "LOGIN",
            payload: {
                "status": "SUCCESS",
                "message": "User login successfully",
                "token": token
            }
        });

    } catch (e) {
        RedisManager.getInstance().sendToApi(clientId, {
            type: "LOGIN",
            payload: {
                "status": "ERROR",
                "message": "Something went wrong",
                token: ""
            }
        });
    }
}