import {
  CreateUserInput,
  CreateUserInputType,
  LoginUserInput,
  LoginUserInputType,
} from "../types/types";
import { RedisManager } from "../redis/RedisManager";
import { LOGIN_SAVE, REGISTER_SAVE } from "../types/index";

export const registerUser = async (
  userData: CreateUserInputType,
  clientId: string,
) => {
  const userToCreate = CreateUserInput.safeParse(userData);
  if (!userToCreate.success) {
    RedisManager.getInstance().sendToApi(clientId, {
      type: "REGISTER",
      payload: {
        status: "ERROR",
        message: "Invalid user data",
      },
    });
  } else {
    await RedisManager.getInstance().pushtodb({
      type: REGISTER_SAVE,
      data: {
        name: userToCreate.data.name,
        email: userToCreate.data.email,
        password: userToCreate.data.password,
        clientId: clientId as string,
      },
    });
  }
};

export const loginUser = async (
  loginData: LoginUserInputType,
  clientId: string,
) => {
  const loginInput = LoginUserInput.safeParse(loginData);

  if (!loginInput.success) {
    RedisManager.getInstance().sendToApi(clientId, {
      type: "LOGIN",
      payload: {
        status: "ERROR",
        message: "Invalid login data",
        token: "",
      },
    });
  } else {
    await RedisManager.getInstance().pushtodb({
      type: LOGIN_SAVE,
      data: {
        email: loginInput.data.email,
        password: loginInput.data.password,
        clientId: clientId as string,
      },
    });
  }
};
