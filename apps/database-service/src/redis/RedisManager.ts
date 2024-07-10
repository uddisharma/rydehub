import { RedisClientType, createClient } from "redis";
import { MessageToApiGateway } from "../types/toApi";
import { RedisManagerInstance } from "./Instances";

export class RedisManager {
    private client: RedisClientType;
    private static instance: RedisManager;
    private publisher: RedisClientType;

    constructor() {
        this.client = createClient();
        this.client.connect();
        this.publisher = createClient();
        this.publisher.connect();
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new RedisManager();
        }
        return this.instance;
    }

    public sendToApi(clientId: string, message: MessageToApiGateway) {
        this.client.publish(clientId, JSON.stringify(message));
    }

    // public pushMessage(message: any) {
    //     this.client.lPush("db_processor", JSON.stringify(message));
    // }

    public sendAndAwait(instance: RedisManagerInstance, message: any) {
        return new Promise<any>((resolve) => {

            const id = `${this.getRandomClientId()}-${instance}`;

            this.client.subscribe(id, (message) => {
                this.client.unsubscribe(id);
                resolve(JSON.parse(message));
            });

            this.publisher.lPush(`${instance}.messages`, JSON.stringify({ clientId: id, message }));
        });
    }

    public getRandomClientId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}