export const TO_USER = "user";
export const TO_DRIVER = "driver";
export const TO_LOCATION = "location";
export const TO_RIDE = "ride";
export const TO_PAYMENT = "payment";
export const TO_NOTIFICATION = "notification";
export const TO_API_GATEWAY = "api-gateway";
export const TO_DB = "db";

export const FROM_USER = "user";
export const FROM_DRIVER = "driver";
export const FROM_LOCATION = "location";
export const FROM_RIDE = "ride";
export const FROM_PAYMENT = "payment";
export const FROM_NOTIFICATION = "notification";
export const FROM_API_GATEWAY = "api-gateway";
export const FROM_DB = "db";

export type RedisManagerInstance =
  | "user"
  | "driver"
  | "location"
  | "ride"
  | "payment"
  | "notification"
  | "api-gateway"
  | "db";
