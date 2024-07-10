import { createClient, } from "redis";
import { DbService } from "./routes/DbRoutes";
import { FROM_DB } from "./redis/Instances";

async function main() {
    const dbengine = new DbService();
    const redisClient = createClient();
    await redisClient.connect();

    console.log("connected to redis ( database service )");

    redisClient.on('error', (err) => console.error('Redis Client Error', err));

    while (true) {
        const response = await redisClient.rPop(`${FROM_DB}.messages` as string)
        if (!response) {

        } else {
            dbengine.process(JSON.parse(response));
        }
    }

}

main();
