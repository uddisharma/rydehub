import { createClient, } from "redis";
import { RideService } from "./routes/FareRoutes";
import { FROM_RIDE } from "./redis/Instances";

async function main() {
    const engine = new RideService();
    const redisClient = createClient();
    await redisClient.connect();
    console.log("connected to redis ( ride service )");
    redisClient.on('error', (err) => console.error('Redis Client Error', err));

    while (true) {
        const response = await redisClient.rPop(`${FROM_RIDE}.messages` as string)
        if (!response) {

        } else {
            engine.process(JSON.parse(response));
        }
    }

}

main();
