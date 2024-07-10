import { CalculateFareAndDistance } from "../controllers/FareController";
import { MessageFromApIGateway } from "../types/from";
import { LOGIN, REGISTER, FARE_CALCULATE } from "../types/index";

export class RideService {
  async process({
    message,
    clientId,
  }: {
    message: MessageFromApIGateway;
    clientId: string;
  }) {
    switch (message.type) {
      case FARE_CALCULATE:
        await CalculateFareAndDistance(message.data, clientId);

        break;
    }
  }
}
