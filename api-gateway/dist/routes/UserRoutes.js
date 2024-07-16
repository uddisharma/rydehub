"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/signup", UserController_1.registerUser);
exports.userRouter.post("/login", UserController_1.loginUser);
exports.default = exports.userRouter;
