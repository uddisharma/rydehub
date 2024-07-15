import { FunctionComponent } from "react";
import CardsearchLocation from "./CardsearchLocation";
import CardselectRide from "./CardselectRide";

export type SearchContainer1Type = {
  className?: string;
};

const SearchContainer1: FunctionComponent<SearchContainer1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-left text-base text-text-text-neutral-dark font-body-small ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
        <CardsearchLocation />
        <div className="self-stretch shadow-[0px_2px_20px_rgba(0,_0,_0,_0.1)] rounded-spacing-spacing-32 bg-surface-surface-default-white flex flex-col items-start justify-start pt-spacing-spacing-32 px-spacing-spacing-24 pb-spacing-spacing-48 gap-[32px] z-[1] text-5xl text-text-text-default-black">
          <h2 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
            Choose your ride
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base text-text-text-neutral-dark">
            <div className="self-stretch rounded-spacing-spacing-16 bg-view-view-primary-lighter flex flex-row items-start justify-start py-spacing-spacing-8 px-spacing-spacing-16">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row flex-wrap items-center justify-between gap-[7.25px]">
                  <img
                    className="h-[32.5px] w-[52px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icontaxioptionb32x32.svg"
                  />
                  <div className="w-[215.5px] flex flex-row items-center justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative font-semibold inline-block min-w-[52px]">{`Normal `}</div>
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-text-text-neutral">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <img
                            className="h-4 w-4 relative"
                            loading="lazy"
                            alt=""
                            src="/iconclock16x16.svg"
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
                            src="/iconusercircle16x16.svg"
                          />
                          <div className="relative inline-block min-w-[44px]">
                            2 Seats
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative font-semibold text-text-text-default-black inline-block min-w-[36px] whitespace-nowrap">
                    $1.99
                  </div>
                </div>
              </div>
            </div>
            <CardselectRide normal="Economy" seats="5 Seats" prop="$5.99" />
            <CardselectRide normal="Comfort " seats="6 Seats" prop="$8.00" />
          </div>
          <button className="cursor-pointer [border:none] py-[12.5px] px-5 bg-button-button-secondary-darker self-stretch rounded-spacing-spacing-56 flex flex-row items-center justify-center gap-[8px] whitespace-nowrap hover:bg-darkslategray">
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="/iconsaddcircle24x24.svg"
            />
            <div className="relative text-sm font-semibold font-body-small text-surface-surface-default-white text-center inline-block min-w-[69px]">
              Select Ride
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchContainer1;
