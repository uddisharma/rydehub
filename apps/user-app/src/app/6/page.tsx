"use client";
import { useEffect } from "react";
import { useLocationDetails, useUserLocation } from "../../hooks/getLocation";
import { useRecoilValue } from "recoil";
import { RideState } from "../../atoms/ride";

const MyComponent = () => {
  const ridevalue = useRecoilValue(RideState);
  const { latitude, longitude } = useUserLocation();
  const locationDetails = useLocationDetails(latitude, longitude);

  useEffect(() => {
    if (locationDetails) {
      console.log("Location Name:", locationDetails.placeName);
      console.log("Coordinates:", locationDetails.coordinates);
    }
  }, [locationDetails]);

  return (
    <div>
      {locationDetails && <p>{locationDetails.placeName}</p>}
      {locationDetails && <p>{locationDetails.coordinates}</p>}
    </div>
  );
};

export default MyComponent;
