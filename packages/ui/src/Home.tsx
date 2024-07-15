import { FunctionComponent } from "react";
import CentralContainer from "./components/CentralContainer";
import SearchContainer from "./components/SearchContainer";

export const Home: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-surface-surface-default-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border leading-[normal] tracking-[normal]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/map@2x.png"
      />
      <header className="self-stretch flex flex-row items-start justify-between p-4 gap-[20px] z-[1] text-left text-xs text-text-text-default-black font-body-small">
        <div className="w-[94.2px] flex flex-row items-start justify-start gap-[4px]">
          <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
            <img
              className="w-[16.9px] h-2.5 relative"
              loading="lazy"
              alt=""
              src="/container.svg"
            />
          </div>
          <a className="[text-decoration:none] flex-1 relative font-medium text-[inherit] whitespace-nowrap shrink-0">{`StaySafe `}</a>
          <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
            <img
              className="w-[17px] h-3 relative"
              loading="lazy"
              alt=""
              src="/wifi.svg"
            />
          </div>
        </div>
        <div className="w-[65px] flex flex-row items-start justify-start gap-[4.1px]">
          <a className="[text-decoration:none] flex-1 relative font-medium text-[inherit]">
            100%
          </a>
          <div className="flex flex-col items-start justify-start pt-[3.8px] px-0 pb-0">
            <img
              className="w-[27.1px] h-[11.5px] relative"
              loading="lazy"
              alt=""
              src="/slider.svg"
            />
          </div>
        </div>
      </header>
      <section className="self-stretch h-[119px] relative max-w-full">
        <div className="absolute top-[0px] left-[0px] w-[430px] h-[72px] flex flex-row items-start justify-start p-4 box-border max-w-full z-[1]">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start max-w-full">
            <div className="h-10 w-10 relative flex items-center justify-center">
              <img
                className="h-full w-full object-contain absolute left-[2px] top-[2px] [transform:scale(2)]"
                loading="lazy"
                alt=""
                src="/iconmenubar40x40.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute top-[41px] left-[161px] w-8 h-[21.7px] overflow-hidden object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/icontaxioptiona32x32.svg"
        />
      </section>
      <section
        className={`self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-4 box-border max-w-full text-left text-base text-text-text-neutral-dark font-body-small `}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-full mq398:gap-[20px]">
          <div className="w-[292px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
            <div className="flex-1 flex flex-row items-end justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-end pt-0 pb-[39.3px] pr-3 pl-0">
                <img
                  className="w-8 h-[21.7px] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/icontaxioptiona32x32-1.svg"
                />
              </div>
              <img
                className={`h-[88px] w-[88px] relative z-[1]`}
                loading="lazy"
                alt=""
                src="/gpslocation.svg"
              />
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
            <div
              className={`self-stretch shadow-[0px_2px_20px_rgba(0,_0,_0,_0.1)] rounded-spacing-spacing-24 bg-surface-surface-default-white flex flex-row flex-wrap items-start justify-start p-4 gap-[16px] z-[1] text-left text-base text-text-text-neutral-dark font-body-small`}
            >
              <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
                <img
                  className="w-8 h-8 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/iconsafetyprotection32x32.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[177px]">
                <div className="relative font-semibold">
                  Make your trip safety first
                </div>
                <div className="relative text-sm text-text-text-neutral">
                  Check how make our customer is more safety
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/iconarrowleft24x24.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-left text-5xl text-text-text-default-black font-body-small`}
      >
        <div className="flex-1 shadow-[0px_2px_20px_rgba(0,_0,_0,_0.1)] rounded-spacing-spacing-32 bg-surface-surface-default-white flex flex-col items-start justify-start pt-spacing-spacing-32 px-spacing-spacing-24 pb-spacing-spacing-48 box-border gap-[32px] max-w-full z-[1] mq398:gap-[16px]">
          <h2 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
            <p className="m-0">{`Where are you going `}</p>
            <p className="m-0">today?</p>
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-sm text-text-text-neutral-dark">
            <div className="self-stretch rounded-radius-radius-56 bg-input-input-neutral-lighter flex flex-row items-center justify-start p-4">
              <div className="w-[257.5px] flex flex-row items-center justify-start py-0 pr-[101px] pl-0 box-border gap-[8px] mq257:pr-5 mq257:box-border">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/iconssearch24x24.svg"
                />
                <input
                  className="w-[calc(100%_-_125px)] [border:none] [outline:none] font-semibold font-body-small text-sm bg-[transparent] h-[23px] flex-1 relative text-text-text-neutral-dark text-left inline-block min-w-[74px] p-0"
                  placeholder="Search destinations"
                  type="text"
                />
              </div>
            </div>
            <div
              className={`self-stretch flex flex-col items-start justify-start py-0 pr-[33px] pl-0 gap-[24px] text-left text-sm text-text-text-neutral-dark font-body-small`}
            >
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[16px]">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/iconlocation24x24.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start min-w-[180px]">
                  <div className="relative font-medium">{`2972 Westheimer Rd. Santa Ana, Illinois 85486 `}</div>
                  <div className="relative text-text-text-neutral">
                    Phnom Penh, Cambodia
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[16px]">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/iconlocation24x24.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start min-w-[180px]">
                  <div className="relative font-medium">{`2972 Westheimer Rd. Santa Ana, Illinois 85486 `}</div>
                  <div className="relative text-text-text-neutral">
                    Phnom Penh, Cambodia
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[16px]">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/iconlocation24x24.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start min-w-[180px]">
                  <div className="relative font-medium">{`2972 Westheimer Rd. Santa Ana, Illinois 85486 `}</div>
                  <div className="relative text-text-text-neutral">
                    Phnom Penh, Cambodia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
