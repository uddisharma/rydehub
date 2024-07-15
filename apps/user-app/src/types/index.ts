export interface SearchContainerProps {
  className?: string;
}

export interface Coordinates {
  start: number[];
  end: number[];
}

export interface VisitedPlace {
  placeName: string;
  coordinates: Coordinates;
}

export type AddressType = {
  className?: string;
  suggestions: string[];
  onSuggestionClick: (placeName: string) => void;
  recentlyVisited: VisitedPlace[];
  setQuery?: (query: string) => void;
  setSuggestions?: (suggestions: string[]) => void;
  setCoordinates?: (coordinates: Coordinates) => void;
  setRecentlyVisited?: (recentlyVisited: VisitedPlace[]) => void;
};
