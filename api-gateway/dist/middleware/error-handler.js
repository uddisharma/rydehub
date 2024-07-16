"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleError = HandleError;
function HandleError(err, next) {
    const error = new Error(err.message || "Something went wrong!");
    error.status = err.status || 500;
    next(error);
}
