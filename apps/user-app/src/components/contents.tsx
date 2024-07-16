"use client";
import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import { RideState } from "../atoms/ride";
import { useState, useCallback, useEffect } from "react";
import { Coordinates, VisitedPlace } from "../types";
import axios from "axios";
import _ from "lodash";
import PickUp from "./Pickup";
import { useRouter } from "next/navigation";
import { useLocationDetails, useUserLocation } from "../hooks/getLocation";

export type ContentsType = {
  className?: string;
};

const Contents: NextPage<ContentsType> = ({ className = "" }) => {
  const router = useRouter();
  const [ride, setRide] = useRecoilState(RideState);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [coordinates, setCoordinates] = useState<Coordinates>({
    start: [],
    end: [],
  });
  const [recentlyPickedUps, setrecentlyPickedUps] = useState<VisitedPlace[]>(
    [],
  );

  useEffect(() => {
    if (ride?.end_location == "") {
      router.push("/");
    }
  }, [ride]);

  const { latitude, longitude } = useUserLocation();
  const locationDetails = useLocationDetails(latitude, longitude);

  useEffect(() => {
    const storedRecentlyVisited = localStorage.getItem("recentlyPickedUps");
    if (storedRecentlyVisited) {
      setrecentlyPickedUps(JSON.parse(storedRecentlyVisited));
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

  useEffect(() => {
    if (locationDetails) {
      fetchSuggestions(ride?.start_location);

      setRide((prev) => ({
        ...prev,
        start_coordinates: locationDetails.coordinates,
        start_location: locationDetails.placeName,
      }));
    }
  }, [locationDetails]);

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

      const existingEntry = recentlyPickedUps.find((place) => {
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
        start: coordinates ?? ride?.start_coordinates,
        end: ride?.end_coordinates,
      });

      setRide({
        start_coordinates: coordinates ?? ride?.start_coordinates,
        start_location: placeName ?? ride?.start_location,
        end_coordinates: ride?.end_coordinates,
        end_location: ride?.end_location,
      });

      if (existingEntry) {
        existingEntry.coordinates.end = coordinates;
        setrecentlyPickedUps([
          ...recentlyPickedUps.filter((place) => place !== existingEntry),
          existingEntry,
        ]);

        const Removed = recentlyPickedUps.filter(
          (place) => place?.placeName !== placeName,
        );

        localStorage.setItem(
          "recentlyPickedUps",
          JSON.stringify([newVisitedPlace, ...Removed]),
        );
      } else {
        setrecentlyPickedUps([newVisitedPlace, ...recentlyPickedUps]);
        localStorage.setItem(
          "recentlyPickedUps",
          JSON.stringify([newVisitedPlace, ...recentlyPickedUps]),
        );
      }
      if (ride?.end_coordinates) {
        router.push("/preview");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <div
      className={`flex-1 shadow-[0px_2px_20px_rgba(0,_0,_0,_0.1)] rounded-spacing-spacing-32 bg-surface-surface-default-white flex flex-col items-start justify-start pt-spacing-spacing-32 px-spacing-spacing-24 pb-spacing-spacing-48 box-border gap-[32px] max-w-full z-[1] text-left text-5xl text-text-text-default-black font-body-small ${className}`}
    >
      <h2 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
        <p className="m-0">{`Where are you going `}</p>
        <p className="m-0">today?</p>
      </h2>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq350small:gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch rounded-radius-radius-56 bg-input-input-neutral-lighter flex flex-row items-center justify-start p-4">
            <div className="w-full flex flex-row items-center justify-start py-0 pl-0 box-border gap-[8px] mq257:pr-5 mq257:box-border">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/iconssearch24x24.svg"
              />
              <input
                className="w-full [border:none] [outline:none] font-semibold font-body-small text-sm bg-[transparent] h-[23px] flex-1 relative text-text-text-neutral-dark text-left inline-block min-w-[74px] p-0"
                placeholder="Search pickup location"
                type="text"
                value={query}
                onChange={handleInputChange}
                defaultValue={ride?.start_location}
              />
            </div>
          </div>
          <PickUp
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
            recentlyPickedUps={recentlyPickedUps}
            setQuery={setQuery}
            setSuggestions={setSuggestions}
            setCoordinates={setCoordinates}
            setrecentlyPickedUps={setrecentlyPickedUps}
          />
          {/* <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <button className="cursor-pointer [border:none] py-4 px-[27px] bg-input-input-neutral-lighter rounded-radius-radius-56 flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/iconcar24x24.svg"
                />
                <div className="relative text-[10px] font-semibold font-body-small text-text-text-neutral-dark text-left inline-block min-w-[48px] ">
                  Go Now
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-4 px-[10px] bg-input-input-neutral-lighter rounded-radius-radius-56 flex flex-row items-center justify-center">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/iconaddcircle24x24.svg"
                />
                <div className="relative font-semibold font-body-small text-text-text-neutral-dark text-left inline-block min-w-[108px] text-[10px]">
                  Add your address
                </div>
              </button>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contents;
