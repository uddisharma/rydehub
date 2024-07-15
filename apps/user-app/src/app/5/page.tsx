import type { NextPage } from "next";
import FrameComponent4 from "../../components/frame-component4";

const ConnectingRide: NextPage = () => {
  return (
    <div className="w-full relative bg-surface-surface-default-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border gap-[39px] leading-[normal] tracking-[normal]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/map@2x.png"
      />
      <FrameComponent4 />
      <img
        className="w-8 h-[21.7px] absolute !m-[0] top-[32px] right-[89px] overflow-hidden shrink-0 object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/icontaxioptiona32x32-2.svg"
      />
      <img
        className="w-8 h-[21.7px] absolute !m-[0] top-[97px] right-[144px] overflow-hidden shrink-0 object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/icontaxioptiona32x32-2.svg"
      />
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
        <section className="flex-1 shadow-[0px_2px_20px_rgba(0,_0,_0,_0.1)] rounded-spacing-spacing-32 bg-surface-surface-default-white flex flex-col items-start justify-start pt-8 px-6 pb-12 box-border gap-[31.7px] max-w-full z-[1] text-left text-5xl text-text-text-default-black font-subtitle-small mq383:pt-5 mq383:pb-5 mq383:box-border mq398:gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <h1 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
              Connecting to your driver
            </h1>
            <div className="relative text-xs leading-[14px] text-text-text-neutral">
              <p className="m-0">{`The driver will be on their way as soon `}</p>
              <p className="m-0 whitespace-pre-wrap">as they confirmed</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
              className="h-14 w-14 relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src="/profile@2x.png"
            />
            <div className="flex flex-col items-start justify-start">
              <h1 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                Wade Warren
              </h1>
              <div className="flex flex-col items-start justify-start gap-[8px] text-xs text-text-text-neutral">
                <div className="relative leading-[14px]">
                  <p className="m-0">At company: 1 year</p>
                  <p className="m-0">Rride: 1000</p>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/iconstarfill16x16.svg"
                  />
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/iconstarfill16x16.svg"
                  />
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/iconstarfill16x16.svg"
                  />
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/iconstarfill16x16.svg"
                  />
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/iconstarfill16x16.svg"
                  />
                  <div className="relative leading-[14px] inline-block min-w-[52px]">
                    5.0 Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between py-0 px-6 gap-[20px] text-center text-sm text-text-text-primary-darker mq339:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                <img
                  className="w-4 h-4 relative"
                  loading="lazy"
                  alt=""
                  src="/iconlogincircle16x16.svg"
                />
              </div>
              <div className="relative font-medium inline-block min-w-[34px]">
                21 km
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                <img
                  className="w-4 h-4 relative"
                  loading="lazy"
                  alt=""
                  src="/iconclock16x16.svg"
                />
              </div>
              <div className="relative font-medium inline-block min-w-[34px]">
                8 min
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                <img
                  className="w-4 h-4 relative"
                  loading="lazy"
                  alt=""
                  src="/icondollarcircle16x16.svg"
                />
              </div>
              <div className="relative font-medium inline-block min-w-[31px] whitespace-nowrap">
                $1.99
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-line-line-neutral-light" />
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full text-2xs text-surface-surface-default-white mq360:flex-wrap">
            <div className="w-5 flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[25px]">
              <div className="self-stretch h-[54px] relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-5 h-5 z-[1] border-[0px] border-solid border-view-view-primary" />
                <div className="absolute top-[40px] left-[3px] w-3.5 flex flex-row items-start justify-start">
                  <div className="h-[63.7px] w-[1.7px] absolute !m-[0] bottom-[-26.7px] left-[6px] box-border border-r-[1.7px] border-solid border-view-view-primary" />
                  <div className="flex-1 flex flex-row items-start justify-start py-0 pr-[3px] pl-0 z-[1]">
                    <div className="h-3.5 w-3.5 relative rounded-[50%] bg-view-view-primary" />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 ml-[-10px]">
                      <div className="self-stretch h-[7px] relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap z-[1]">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-px">
                <img
                  className="h-[17px] w-[17px] relative"
                  loading="lazy"
                  alt=""
                  src="/group-12.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-between min-w-[209px] min-h-[97px] max-w-full text-xs text-text-text-neutral-darker mq360:min-h-[auto]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative font-medium">
                    1901 Thornridge Cir. Shiloh, Hawaii 81063
                  </div>
                </div>
              </div>
              <div className="relative leading-[14px] text-text-text-neutral inline-block min-w-[46px]">
                Add stop
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-sm text-text-text-neutral-dark">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative font-medium">
                    3517 W. Gray St. Utica, Pennsylvania 57867
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-4 px-5 bg-button-button-primary-lighter self-stretch rounded-spacing-spacing-56 flex flex-row items-start justify-center gap-[8px] whitespace-nowrap hover:bg-gainsboro">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/iconlocation24x24.svg"
            />
            <div className="relative text-sm font-semibold font-subtitle-small text-text-text-neutral-dark text-center inline-block min-w-[100px]">
              Edit Destination
            </div>
          </button>
          <div className="self-stretch flex flex-col items-start justify-start gap-[15.5px] text-center text-xs text-text-text-neutral-dark">
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-line-line-neutral-light" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq239:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                  <div className="relative leading-[14px] inline-block min-w-[82px]">
                    Payment option
                  </div>
                </div>
                <div className="relative text-sm font-semibold text-text-text-neutral-darker inline-block min-w-[57px]">
                  Visa card
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq186:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                  <div className="relative leading-[14px] inline-block min-w-[54px]">
                    Total price
                  </div>
                </div>
                <div className="relative text-sm font-semibold text-text-text-neutral-darker inline-block min-w-[32px] whitespace-nowrap">
                  $1.99
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-line-line-neutral-light" />
          </div>
          <button className="cursor-pointer [border:none] py-4 px-5 bg-button-button-secondary-darker self-stretch rounded-spacing-spacing-56 flex flex-row items-start justify-center gap-[8px] whitespace-nowrap hover:bg-darkslategray">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/iconcar24x24.svg"
            />
            <div className="relative text-sm font-semibold font-subtitle-small text-surface-surface-default-white text-center inline-block min-w-[72px]">
              Cancel Ride
            </div>
          </button>
        </section>
      </main>
    </div>
  );
};

export default ConnectingRide;
