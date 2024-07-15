import type { NextPage } from "next";
import { AddressType, VisitedPlace } from "../types";
import { processAddress } from "../utils/address";
import { useSetRecoilState } from "recoil";
import { RideState } from "../atoms/ride";

const Address: NextPage<AddressType> = ({
  suggestions,
  className = "",
  onSuggestionClick,
  recentlyVisited,
  setQuery,
  setSuggestions,
  setCoordinates,
  setRecentlyVisited,
}) => {
  const setRide = useSetRecoilState(RideState);
  const handleRecentLocation = (recent: VisitedPlace) => {
    if (setQuery) setQuery(recent.placeName);

    if (setSuggestions) setSuggestions([]);

    if (setCoordinates) setCoordinates(recent.coordinates);

    setRide((prevRideState) => ({
      ...prevRideState,
      end_coordinates: recent?.coordinates?.end,
      end_location: recent?.placeName,
    }));

    const existingEntry = recentlyVisited.find((place) => {
      return (
        place.placeName === recent.placeName && place.coordinates.end.length > 0
      );
    });
    const newVisitedPlace: VisitedPlace = {
      placeName: recent?.placeName,
      coordinates: { start: [], end: recent?.coordinates?.end },
    };

    console.log([newVisitedPlace, ...recentlyVisited]);

    if (existingEntry) {
      existingEntry.coordinates.end = recent?.coordinates?.end;
      if (setRecentlyVisited)
        setRecentlyVisited([
          ...recentlyVisited.filter((place) => place !== existingEntry),
          existingEntry,
        ]);

      const Removed = recentlyVisited.filter(
        (place) => place?.placeName !== recent?.placeName,
      );

      localStorage.setItem(
        "recentlyVisited",
        JSON.stringify([newVisitedPlace, ...Removed]),
      );
    } else {
      localStorage.setItem(
        "recentlyVisited",
        JSON.stringify([newVisitedPlace, ...recentlyVisited]),
      );
    }
  };

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-0 pr-[33px] pl-0 gap-[24px] text-left text-sm text-text-text-neutral-dark font-body-small ${className}`}
    >
      {suggestions?.length > 0
        ? suggestions.map((suggestion, index) => {
            const processedAddress = processAddress(suggestion)[0];

            const handleAddressClick = () => {
              onSuggestionClick(suggestion);
            };

            return (
              <div
                key={index}
                className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[16px] cursor-pointer"
                onClick={handleAddressClick}
              >
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/iconlocation24x24.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start min-w-[180px]">
                  <div className="relative font-medium">
                    {processedAddress.firstLine}
                  </div>
                  <div className="relative text-text-text-neutral">
                    {processedAddress.secondLine}
                  </div>
                </div>
              </div>
            );
          })
        : recentlyVisited?.slice(0, 5)?.map((recent, index) => {
            const processedAddress = processAddress(recent.placeName)[0];
            return (
              <div
                onClick={() => {
                  handleRecentLocation(recent);
                }}
                key={index}
                className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[16px] cursor-pointer"
              >
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/iconlocation24x24.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start min-w-[180px]">
                  <div className="relative font-medium">
                    {processedAddress?.firstLine}
                  </div>
                  <div className="relative text-text-text-neutral">
                    {processedAddress?.secondLine}
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Address;
