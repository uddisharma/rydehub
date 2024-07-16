"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const middleware = __importStar(require("./middleware/index"));
const RideRoutes_1 = __importDefault(require("./routes/RideRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(middleware.RateLimiter);
app.use(middleware.jsonParser);
app.use(middleware.corsOptions);
app.use(middleware.customCookieMiddleware);
app.get("/", (req, res) => {
    res.send("Healthy Server !");
});
app.use("/api/v1/user", UserRoutes_1.default);
app.use("/api/v1", RideRoutes_1.default);
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
        },
    });
});
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`API Gateway listening on port ${PORT}`);
});
