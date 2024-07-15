import { FunctionComponent } from "react";
import Navigation1 from "./Navigation1";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[0.8px] text-center text-xl text-surface-surface-default-white font-body-small ${className}`}
    >
      <header className="mr-[-1px] self-stretch flex flex-row items-start justify-between p-4 gap-[20px] z-[1] text-left text-xs text-text-text-default-black font-body-small">
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
      <Navigation1 />
      <div className="w-[181px] h-[50px] flex flex-row items-start justify-end py-0 px-4 box-border">
        <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
          <img
            className="h-[21.7px] w-8 relative overflow-hidden shrink-0 object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/icontaxioptiona32x32.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <div className="w-10 h-10 relative z-[1] flex items-center justify-center">
              <img
                className="w-full h-full z-[1] object-contain absolute left-[-2px] top-[2px] [transform:scale(2)]"
                loading="lazy"
                alt=""
                src="/icongpsblack40x401.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
