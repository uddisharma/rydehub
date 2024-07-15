import { atom } from "recoil";

export const RideState = atom({
  key: "ridestate",
  default: {
    start_coordinates: [0, 0],
    start_location: "",
    end_coordinates: [0, 0],
    end_location: "",
  },
});
