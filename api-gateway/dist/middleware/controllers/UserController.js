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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const RedisManager_1 = require("../../redis/RedisManager");
const index_1 = require("../../types/index");
const Instances_1 = require("../../redis/Instances");
const error_handler_1 = require("../error-handler");
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait(Instances_1.TO_USER, {
            type: index_1.REGISTER,
            data: {
                name,
                email,
                password,
            },
        });
        res.status(200).send({ response });
    }
    catch (error) {
        (0, error_handler_1.HandleError)(error, next);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait(Instances_1.TO_USER, {
            type: index_1.LOGIN,
            data: {
                email,
                password,
            },
        });
        res.status(200).send({ response });
    }
    catch (error) {
        (0, error_handler_1.HandleError)(error, next);
    }
});
exports.loginUser = loginUser;
