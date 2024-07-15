import type { NextPage } from "next";
import CardselectRide1 from "./cardselect-ride1";

export type RideOptionsType = {
  className?: string;
};

const RideOptions: NextPage<RideOptionsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-left text-5xl text-text-text-default-black font-body-small ${className}`}
    >
      <div className="flex-1 shadow-[0px_2px_20px_rgba(0,_0,_0,_0.1)] rounded-spacing-spacing-32 bg-surface-surface-default-white flex flex-col items-start justify-start pt-spacing-spacing-32 px-spacing-spacing-24 pb-spacing-spacing-48 box-border gap-[32px] max-w-full z-[1] mq398:gap-[16px]">
        <h2 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
          Choose your ride
        </h2>
        <div className="self-stretch h-[236px] flex flex-col items-start justify-start gap-[16px] text-base text-text-text-neutral-dark">
          <div className="self-stretch flex-1 rounded-spacing-spacing-16 bg-view-view-primary-lighter flex flex-row items-start justify-start pt-0 px-spacing-spacing-16 pb-spacing-spacing-8 relative gap-[24px] border-[1.5px] border-solid border-border-border-primary">
            <div className="flex flex-col items-start justify-between py-0 px-0 box-border relative min-h-[52px]">
              <div className="flex flex-row items-center justify-center">
                <div className="w-[215.5px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[16px]">
                  <img
                    className="h-[32.5px] w-[52px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icontaxioptionb32x321.svg"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative font-semibold inline-block min-w-[52px]">{`Normal `}</div>
                    <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-text-text-neutral">
                      <div className="relative text-base font-semibold text-text-text-default-black inline-block min-w-[36px] whitespace-nowrap">
                        $1.99
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
                          loading="lazy"
                          alt=""
                          src="/iconusercircle16x161.svg"
                        />
                        <div className="relative inline-block min-w-[44px]">
                          2 Seats
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
                src="/group-11.svg"
              />
            </div>
            <div className="!m-[0] absolute top-[-9px] left-[284px] rounded-spacing-spacing-4 bg-button-button-secondary-darker flex flex-row items-center justify-center py-px px-[5px] text-xs text-border-border-primary">
              <div className="relative leading-[14px] inline-block min-w-[40px]">
                Popular
              </div>
            </div>
          </div>
          <CardselectRide1 normal="Economy" prop="$5.99" seats="5 Seats" />
          <CardselectRide1 normal="Comfort " prop="$8.00" seats="6 Seats" />
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-spacing-spacing-24 gap-[20px] text-center text-sm text-text-text-primary-darker mq257:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img
              className="h-4 w-4 relative"
              loading="lazy"
              alt=""
              src="/iconlogincircle16x16.svg"
            />
            <div className="relative font-medium inline-block min-w-[34px]">
              21 km
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img
              className="h-4 w-4 relative"
              loading="lazy"
              alt=""
              src="/iconclock16x16-3.svg"
            />
            <div className="relative font-medium inline-block min-w-[34px]">
              8 min
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img
              className="h-4 w-4 relative"
              loading="lazy"
              alt=""
              src="/icondollarcircle16x16.svg"
            />
            <div className="relative font-medium inline-block min-w-[31px] whitespace-nowrap">
              $1.99
            </div>
          </div>
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
    </section>
  );
};

export default RideOptions;
