import { FunctionComponent } from "react";

export type GpsLocationIconType = {
  className?: string;
};

const GpsLocationIcon: FunctionComponent<GpsLocationIconType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-[88px] w-[88px] relative z-[1] ${className}`}
      loading="lazy"
      alt=""
      src="/gpslocation.svg"
    />
  );
};

export default GpsLocationIcon;
