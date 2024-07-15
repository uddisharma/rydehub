import type { NextPage } from "next";

export type CardselectRideType = {
  className?: string;
  normal?: string;
  seats?: string;
  prop?: string;
};

const CardselectRide: NextPage<CardselectRideType> = ({
  className = "",
  normal,
  seats,
  prop,
}) => {
  return (
    <div
      className={`self-stretch rounded-spacing-spacing-16 flex flex-row items-start justify-start py-spacing-spacing-8 px-spacing-spacing-16 text-left text-base text-text-text-neutral-dark font-body-small ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq257:flex-wrap">
          <div className="flex flex-row items-center justify-start py-0 pr-[22px] pl-0 gap-[16px]">
            <img
              className="h-[35.3px] w-[52px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icontaxioptiona32x32-3.svg"
            />
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-semibold inline-block min-w-[65px]">
                {normal}
              </div>
              <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-text-text-neutral">
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="h-4 w-4 relative"
                    loading="lazy"
                    alt=""
                    src="/iconclock16x16-1.svg"
                  />
                  <div className="relative inline-block min-w-[33px]">
                    2 min
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="h-4 w-4 relative"
                    loading="lazy"
                    alt=""
                    src="/iconusercircle16x16-1.svg"
                  />
                  <div className="relative inline-block min-w-[44px]">
                    {seats}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative font-semibold text-text-text-default-black inline-block min-w-[38px] whitespace-nowrap">
            {prop}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardselectRide;
