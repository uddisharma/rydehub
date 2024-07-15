import { useState, useEffect } from "react";
import axios from "axios";

interface UserLocation {
  latitude: number | null;
  longitude: number | null;
}

const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState<UserLocation>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const fetchUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting user location:", error);
          },
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    fetchUserLocation();
  }, []);

  return userLocation;
};

const useLocationDetails = (
  latitude: number | null,
  longitude: number | null,
) => {
  const [locationDetails, setLocationDetails] = useState<any>(null); // Adjust this type as per your API response

  useEffect(() => {
    const fetchLocationDetails = async () => {
      if (latitude !== null && longitude !== null) {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;

        try {
          const response = await axios.get(url);
          const placeName = response.data.features[1].place_name;
          const coordinates = response.data.features[1].center;

          setLocationDetails({
            placeName: placeName,
            coordinates: coordinates,
          });
        } catch (error) {
          console.error("Error fetching location details:", error);
        }
      }
    };

    fetchLocationDetails();
  }, [latitude, longitude]);

  return locationDetails;
};

export { useUserLocation, useLocationDetails };
