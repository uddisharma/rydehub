"use client";
import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import Address from "./address";
import { Coordinates, SearchContainerProps, VisitedPlace } from "../types";
import { useRecoilState } from "recoil";
import { RideState } from "../atoms/ride";
import { useLocationDetails, useUserLocation } from "../hooks/getLocation";
import { useRouter } from "next/navigation";

const SearchContainer: NextPage<SearchContainerProps> = ({
  className = "",
}) => {
  const router = useRouter();
  const [ride, setRide] = useRecoilState(RideState);
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [coordinates, setCoordinates] = useState<Coordinates>({
    start: [],
    end: [],
  });
  const [recentlyVisited, setRecentlyVisited] = useState<VisitedPlace[]>([]);

  const { latitude, longitude } = useUserLocation();
  const locationDetails = useLocationDetails(latitude, longitude);

  useEffect(() => {
    if (locationDetails) {
      setRide({
        start_coordinates: locationDetails.coordinates,
        start_location: locationDetails.placeName,
        end_coordinates: [0, 0],
        end_location: "",
      });
    }
  }, [locationDetails]);

  useEffect(() => {
    const storedRecentlyVisited = localStorage.getItem("recentlyVisited");
    if (storedRecentlyVisited) {
      setRecentlyVisited(JSON.parse(storedRecentlyVisited));
    }
  }, [coordinates]);

  const fetchSuggestions = async (input: string) => {
    if (!input) {
      setSuggestions([]);
      return;
    }

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(input)}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;

    try {
      const response = await axios.get(url);
      const places = response.data.features.map(
        (feature: any) => feature.place_name,
      );
      setSuggestions(places);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const debounceFetchSuggestions = useCallback(
    _.debounce((input: string) => fetchSuggestions(input), 300),
    [],
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setQuery(input);
    debounceFetchSuggestions(input);
  };

  const handleSuggestionClick = async (placeName: string) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(placeName)}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;

    try {
      const response = await axios.get(url);
      const coordinates = response.data.features[0].center;

      const existingEntry = recentlyVisited.find((place) => {
        return (
          place.placeName === placeName && place.coordinates.end.length > 0
        );
      });

      const newVisitedPlace: VisitedPlace = {
        placeName: placeName,
        coordinates: { start: [], end: coordinates },
      };

      setQuery(placeName);
      setSuggestions([]);
      setCoordinates({
        start: ride?.start_coordinates ?? [],
        end: coordinates,
      });

      setRide({
        start_coordinates: ride?.start_coordinates ?? [0, 0],
        start_location: ride?.start_location ?? "",
        end_coordinates: coordinates,
        end_location: placeName,
      });

      if (existingEntry) {
        existingEntry.coordinates.end = coordinates;
        setRecentlyVisited([
          ...recentlyVisited.filter((place) => place !== existingEntry),
          existingEntry,
        ]);

        const Removed = recentlyVisited.filter(
          (place) => place?.placeName !== placeName,
        );

        localStorage.setItem(
          "recentlyVisited",
          JSON.stringify([newVisitedPlace, ...Removed]),
        );
      } else {
        setRecentlyVisited([newVisitedPlace, ...recentlyVisited]);
        localStorage.setItem(
          "recentlyVisited",
          JSON.stringify([newVisitedPlace, ...recentlyVisited]),
        );
      }
      if (ride?.end_coordinates) {
        router.push("/pickup");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-left text-5xl text-text-text-default-black font-poppins ${className}`}
    >
      <div className="flex-1 shadow-[0px_2px_20px_rgba(0,_0,_0,_0.1)] rounded-spacing-spacing-32 bg-surface-surface-default-white flex flex-col items-start justify-start pt-spacing-spacing-32 px-spacing-spacing-24 pb-spacing-spacing-48 box-border gap-[32px] max-w-full z-[1] mq398:gap-[16px]">
        <h2 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
          <p className="m-0">{`Where are you going `}</p>
          <p className="m-0">today?</p>
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-sm text-text-text-neutral-dark">
          <div className="self-stretch rounded-radius-radius-56 bg-input-input-neutral-lighter flex flex-row items-center justify-start p-4">
            <div className="w-full flex flex-row items-center justify-start py-0  pl-0 box-border gap-[8px] mq257:pr-5 mq257:box-border">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/iconssearch24x24.svg"
              />
              <input
                className="w-full [border:none] [outline:none] font-semibold font-body-small text-sm bg-[transparent] h-[23px] flex-1 relative text-text-text-neutral-dark text-left inline-block min-w-[74px] p-0"
                placeholder="Search destinations"
                type="text"
                value={query}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <Address
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
            recentlyVisited={recentlyVisited}
            setQuery={setQuery}
            setSuggestions={setSuggestions}
            setCoordinates={setCoordinates}
            setRecentlyVisited={setRecentlyVisited}
          />
        </div>
      </div>
    </section>
  );
};

export default SearchContainer;
