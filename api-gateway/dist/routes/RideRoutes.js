"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rideRouter = void 0;
const express_1 = require("express");
const RideController_1 = require("../controllers/RideController");
exports.rideRouter = (0, express_1.Router)();
exports.rideRouter.post("/calculate-fare", RideController_1.CalculateFare);
exports.default = exports.rideRouter;
