import request from "supertest";
import express from "express";
import { RedisManager } from "../../redis/RedisManager";
import { registerUser } from "../../controllers/UserController";

jest.mock("../../redis/RedisManager");

const app = express();
app.use(express.json());
app.post("/register", registerUser);

describe("POST /register", () => {
  it("should register a user and respond with 200 status", async () => {
    const mockResponse = {
      status: "SUCCESS",
      message: "User registered successfully",
    };

    const sendAndAwaitMock = jest.fn().mockResolvedValue(mockResponse);
    (RedisManager.getInstance as jest.Mock).mockReturnValue({
      sendAndAwait: sendAndAwaitMock,
    } as unknown as RedisManager);

    const res = await request(app).post("/register").send({
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    });

    expect(res.status).toBe(200);
    expect(res.body.response).toEqual(mockResponse);
  });

  it("should respond with invalid user data on wrong data input", async () => {
    const mockResponse = {
      status: "ERROR",
      message: "Invalid user data",
    };

    const sendAndAwaitMock = jest.fn().mockResolvedValue(mockResponse);
    (RedisManager.getInstance as jest.Mock).mockReturnValue({
      sendAndAwait: sendAndAwaitMock,
    } as unknown as RedisManager);

    const res = await request(app).post("/register").send({
      email: "test@example.com",
      password: "password123",
    });

    expect(res.status).toBe(200);
    expect(res.body.response).toEqual(mockResponse);
  });

  // it("should respond with 500 status on internal error", async () => {
  //   const sendAndAwaitMock = jest.fn().mockRejectedValue(new Error("Something went wrong"));
  //   (RedisManager.getInstance as jest.Mock).mockReturnValue({
  //     sendAndAwait: sendAndAwaitMock,
  //   } as unknown as RedisManager);

  //   const res = await request(app).post("/register").send({
  //     name: "Test User",
  //     email: "test@example.com",
  //     password: "password123",
  //   });

  //   expect(res.status).toBe(500);
  //   expect(res.body.status).toBe("ERROR");
  //   expect(res.body.message).toBe("Something went wrong");
  // });
});
