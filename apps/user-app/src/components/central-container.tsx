import type { NextPage } from "next";
import GpsLocationIcon from "./gps-location-icon";
import CardsafetyProtect from "./cardsafety-protect";

export type CentralContainerType = {
  className?: string;
};

const CentralContainer: NextPage<CentralContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-4 box-border max-w-full text-left text-base text-text-text-neutral-dark font-body-small ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-full mq398:gap-[20px]">
        <div className="w-[292px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
          <div className="flex-1 flex flex-row items-end justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-end pt-0 pb-[39.3px] pr-3 pl-0">
              {/* <img
                className="w-8 h-[21.7px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/icontaxioptiona32x32-1.svg"
              /> */}
            </div>
            <GpsLocationIcon />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[25.3px]">
              <img
                className="w-8 h-[21.7px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/icontaxioptiona32x32-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[34.3px] mq398:gap-[17px]">
          <div className="w-[215px] h-[40.7px] flex flex-row items-end justify-between py-0 pr-0 pl-5 box-border gap-[20px]">
            <img
              className="h-[21.7px] w-8 relative overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/icontaxioptiona32x32.svg"
            />
            <div className="h-10 w-10 relative z-[1] flex items-center justify-center">
              <img
                className="h-full w-full z-[1] object-contain absolute left-[-2px] top-[2px] [transform:scale(2)]"
                loading="lazy"
                alt=""
                src="/icongpsblack40x40.svg"
              />
            </div>
          </div>
          <CardsafetyProtect />
        </div>
      </div>
    </section>
  );
};

export default CentralContainer;
