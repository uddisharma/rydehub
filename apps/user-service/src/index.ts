import { createClient, } from "redis";
import { UserService } from "./routes/UserRoute";
import { FROM_USER } from "./redis/Instances";

async function main() {
    const engine = new UserService();
    const redisClient = createClient();
    await redisClient.connect();
    console.log("connected to redis ( user service )");
    redisClient.on('error', (err) => console.error('Redis Client Error', err));

    while (true) {
        const response = await redisClient.rPop(`${FROM_USER}.messages` as string)
        if (!response) {

        } else {
            engine.process(JSON.parse(response));
        }
    }

}

main();
