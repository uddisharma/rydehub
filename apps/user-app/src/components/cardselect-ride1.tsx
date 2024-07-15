import type { NextPage } from "next";

export type CardselectRide1Type = {
  className?: string;
  normal?: string;
  prop?: string;
  seats?: string;
};

const CardselectRide1: NextPage<CardselectRide1Type> = ({
  className = "",
  normal,
  prop,
  seats,
}) => {
  return (
    <div
      className={`self-stretch rounded-spacing-spacing-16 flex flex-row items-start justify-start py-1.5 px-4 text-left text-base text-text-text-neutral-dark font-body-small border-[1px] border-solid border-line-line-neutral-light ${className}`}
    >
      <div className="flex flex-col items-start justify-between py-0 px-0 box-border relative min-h-[52px]">
        <div className="flex flex-row items-center justify-center">
          <div className="w-[215.5px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[16px]">
            <img
              className="h-[35.3px] w-[52px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icontaxioptiona32x32-31.svg"
            />
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-semibold inline-block min-w-[65px]">
                {normal}
              </div>
              <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-text-text-neutral">
                <div className="relative text-base font-semibold text-text-text-default-black inline-block min-w-[38px] whitespace-nowrap">
                  {prop}
                </div>
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="h-4 w-4 relative"
                    loading="lazy"
                    alt=""
                    src="/iconclock16x161.svg"
                  />
                  <div className="relative inline-block min-w-[33px]">
                    2 min
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="h-4 w-4 relative"
                    alt=""
                    src="/iconusercircle16x161.svg"
                  />
                  <div className="relative inline-block min-w-[44px]">
                    {seats}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[23px] h-[23px] absolute !m-[0] top-[13px] left-[295px]"
          loading="lazy"
          alt=""
          src="/group-11-1.svg"
        />
      </div>
    </div>
  );
};

export default CardselectRide1;
