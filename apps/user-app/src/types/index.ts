export interface SearchContainerProps {
  className?: string;
}

export interface RideState {
  start_coordinates: number[];
  start_location: string;
  end_coordinates: number[];
  end_location: string;
}

export interface Coordinates {
  start: number[];
  end: number[];
}

export interface VisitedPlace {
  placeName: string;
  coordinates: Coordinates;
}

export interface AddressType {
  className?: string;
  suggestions: string[];
  onSuggestionClick: (placeName: string) => void;
  recentlyVisited: VisitedPlace[];
  setQuery?: (query: string) => void;
  setSuggestions?: (suggestions: string[]) => void;
  setCoordinates?: (coordinates: Coordinates) => void;
  setRecentlyVisited?: (recentlyVisited: VisitedPlace[]) => void;
}

type PickUp = Pick<
  AddressType,
  | "className"
  | "onSuggestionClick"
  | "setCoordinates"
  | "setQuery"
  | "setSuggestions"
  | "suggestions"
>;

type PickUp2 = {
  setrecentlyPickedUps?: (recentlyPickedUps: VisitedPlace[]) => void;
  recentlyPickedUps: VisitedPlace[];
};

export type PickUpType = PickUp & PickUp2;

export type CardpickupDropOffType = {
  className?: string;
  ride: RideState;
};
