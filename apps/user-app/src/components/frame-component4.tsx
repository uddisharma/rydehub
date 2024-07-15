import type { NextPage } from "next";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full shrink-0 text-left text-base text-text-text-default-black font-subtitle-small ${className}`}
    >
      <div className="flex-1 shadow-[0px_2px_20px_rgba(0,_0,_0,_0.1)] rounded-spacing-spacing-32 bg-surface-surface-default-white flex flex-col items-start justify-start p-6 box-border relative gap-[16px] shrink-0 max-w-full">
        <div className="flex flex-col items-start justify-start">
          <div className="relative font-semibold inline-block min-w-[127px] whitespace-nowrap">
            06 Mar 2024, 11:99
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="h-[46px] w-[46px] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-20-2@2x.png"
          />
          <div className="flex flex-col items-start justify-start">
            <div className="relative font-semibold inline-block min-w-[85px]">
              Jacob Jones
            </div>
            <div className="relative text-xs leading-[14px] text-text-text-neutral">
              <p className="m-0">At company: 1 year</p>
              <p className="m-0">Rride: 1000</p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full text-2xs text-surface-surface-default-white mq186:flex-wrap">
          <div className="h-[97px] flex flex-col items-center justify-start pt-0 px-0 pb-px box-border relative gap-[24px]">
            <div className="w-[1.7px] h-[63.7px] absolute !m-[0] top-[16.1px] left-[8.1px] box-border border-r-[1.7px] border-solid border-view-view-primary" />
            <div className="w-5 h-5 relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-view-view-primary" />
            <img
              className="w-[17px] h-[17px] absolute !m-[0] top-[79px] left-[1px]"
              alt=""
              src="/group-12-2.svg"
            />
            <div className="w-3.5 h-3.5 absolute !m-[0] top-[40px] left-[3px] z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-view-view-primary w-full h-full" />
              <div className="absolute top-[3px] left-[4px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap w-[7px] z-[1]">
                +
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-between min-w-[209px] min-h-[97px] max-w-full text-sm text-text-text-neutral-dark mq186:min-h-[auto]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative font-medium inline-block min-w-[119px]">
                  My current location
                </div>
              </div>
            </div>
            <div className="w-[46px] h-3.5 relative text-xs leading-[14px] text-text-text-neutral inline-block">
              Add stop
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-[251px] flex flex-col items-start justify-start">
                <div className="self-stretch h-[23px] relative font-medium inline-block">
                  3517 W. Gray St. Utica, Pennsylvania 57867
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-center text-text-text-neutral-darker mq339:flex-wrap">
          <b className="h-[26px] w-[39px] relative inline-block whitespace-nowrap">
            $7.00
          </b>
          <div className="h-7 w-[89px] rounded-spacing-spacing-56 bg-text-text-neutral-darker flex flex-row items-center justify-center py-[4.5px] px-spacing-spacing-16 box-border gap-[8px] text-xs text-text-text-neutral-lighter">
            <img
              className="h-3 w-3 relative hidden"
              alt=""
              src="/iconlocation24x24.svg"
            />
            <div className="self-stretch flex-1 relative font-medium">
              Completed
            </div>
          </div>
        </div>
        <img
          className="w-6 h-6 absolute !m-[0] top-[24px] left-[358px]"
          loading="lazy"
          alt=""
          src="/iconmorevertical24x24.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent4;
