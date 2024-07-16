import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/UserRoutes";
import * as middleware from "./middleware/index";
import rideRouter from "./routes/RideRoutes";

dotenv.config();

const app = express();

app.use(middleware.RateLimiter);
app.use(middleware.jsonParser);
app.use(middleware.corsOptions);
app.use(middleware.customCookieMiddleware);

app.get("/", (req, res) => {
  res.send("Healthy Server !");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1", rideRouter);

app.use((err: any, req: any, res: any, next: any) => {
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
