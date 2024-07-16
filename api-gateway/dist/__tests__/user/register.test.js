"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const RedisManager_1 = require("../../redis/RedisManager");
const UserController_1 = require("../../controllers/UserController");
jest.mock("../../redis/RedisManager");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/register", UserController_1.registerUser);
describe("POST /register", () => {
    it("should register a user and respond with 200 status", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockResponse = {
            status: "SUCCESS",
            message: "User registered successfully",
        };
        const sendAndAwaitMock = jest.fn().mockResolvedValue(mockResponse);
        RedisManager_1.RedisManager.getInstance.mockReturnValue({
            sendAndAwait: sendAndAwaitMock,
        });
        const res = yield (0, supertest_1.default)(app).post("/register").send({
            name: "Test User",
            email: "test@example.com",
            password: "password123",
        });
        expect(res.status).toBe(200);
        expect(res.body.response).toEqual(mockResponse);
    }));
    it("should respond with invalid user data on wrong data input", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockResponse = {
            status: "ERROR",
            message: "Invalid user data",
        };
        const sendAndAwaitMock = jest.fn().mockResolvedValue(mockResponse);
        RedisManager_1.RedisManager.getInstance.mockReturnValue({
            sendAndAwait: sendAndAwaitMock,
        });
        const res = yield (0, supertest_1.default)(app).post("/register").send({
            email: "test@example.com",
            password: "password123",
        });
        expect(res.status).toBe(200);
        expect(res.body.response).toEqual(mockResponse);
    }));
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
