import type { NextPage } from "next";
import GpsLocationIcon from "./gps-location-icon";
import CardsafetyProtect from "./cardsafety-protect";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-4 box-border max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[27px] max-w-full">
        <div className="self-stretch flex flex-row items-end justify-between py-0 pr-0 pl-[25px] gap-[20px] mq257:flex-wrap">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[32.3px]">
            <img
              className="w-8 h-[21.7px] relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/icontaxioptiona32x32-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-end pt-0 pb-2.5 pr-[11px] pl-0">
            <GpsLocationIcon />
          </div>
          <div className="flex flex-col items-start justify-end pt-0 pb-[34.3px] pr-[17px] pl-0">
            <img
              className="w-8 h-[21.7px] relative overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/icontaxioptiona32x32.svg"
            />
          </div>
          <div className="h-10 w-10 relative z-[1] flex items-center justify-center">
            <img
              className="h-full w-full z-[1] object-contain absolute left-[-2px] top-[2px] [transform:scale(2)]"
              loading="lazy"
              alt=""
              src="/icongpsblack40x401.svg"
            />
          </div>
        </div>
        <CardsafetyProtect />
      </div>
    </section>
  );
};

export default FrameComponent1;
