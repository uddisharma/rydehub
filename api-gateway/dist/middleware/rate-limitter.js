"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const error_handler_1 = require("./error-handler");
exports.RateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 1 * 1000,
    max: 10,
    message: "Too many requests from this IP, please try again after a second.",
    handler: (req, res, next) => {
        const error = new Error("Too many requests, please try again later.");
        (0, error_handler_1.HandleError)(error, next);
    },
});
