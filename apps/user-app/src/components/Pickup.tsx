import type { NextPage } from "next";
import { PickUpType, VisitedPlace } from "../types";
import { processAddress } from "../utils/address";
import { useRecoilState } from "recoil";
import { RideState } from "../atoms/ride";
import { useRouter } from "next/navigation";

const PickUp: NextPage<PickUpType> = ({
  suggestions,
  className = "",
  onSuggestionClick,
  recentlyPickedUps,
  setQuery,
  setSuggestions,
  setCoordinates,
  setrecentlyPickedUps,
}) => {
  const [ride, setRide] = useRecoilState(RideState);
  const router = useRouter();

  const handleRecentLocation = (recent: VisitedPlace) => {
    if (setQuery) setQuery(recent.placeName);

    if (setSuggestions) setSuggestions([]);

    if (setCoordinates) setCoordinates(recent.coordinates);

    setRide((prevRideState) => ({
      ...prevRideState,
      start_coordinates_coordinates: recent?.coordinates?.start,
      start_location: recent?.placeName,
    }));

    const existingEntry = recentlyPickedUps.find((place) => {
      return (
        place.placeName === recent.placeName && place.coordinates.end.length > 0
      );
    });
    const newVisitedPlace: VisitedPlace = {
      placeName: recent?.placeName,
      coordinates: { start: [], end: recent?.coordinates?.end },
    };

    if (existingEntry) {
      existingEntry.coordinates.end = recent?.coordinates?.end;
      if (setrecentlyPickedUps)
        setrecentlyPickedUps([
          ...recentlyPickedUps.filter((place) => place !== existingEntry),
          existingEntry,
        ]);

      const Removed = recentlyPickedUps.filter(
        (place) => place?.placeName !== recent?.placeName,
      );

      localStorage.setItem(
        "recentlyPickedUps",
        JSON.stringify([newVisitedPlace, ...Removed]),
      );
    } else {
      localStorage.setItem(
        "recentlyPickedUps",
        JSON.stringify([newVisitedPlace, ...recentlyPickedUps]),
      );
    }
    if (ride?.end_coordinates) {
      router.push("/preview");
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
        : recentlyPickedUps?.slice(0, 5)?.map((recent, index) => {
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

export default PickUp;
