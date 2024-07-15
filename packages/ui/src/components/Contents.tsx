import { FunctionComponent } from "react";
import Address from "./Address";

export type ContentsType = {
  className?: string;
};

const Contents: FunctionComponent<ContentsType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_2px_20px_rgba(0,_0,_0,_0.1)] rounded-spacing-spacing-32 bg-surface-surface-default-white flex flex-col items-start justify-start pt-spacing-spacing-32 px-spacing-spacing-24 pb-spacing-spacing-48 box-border gap-[32px] max-w-full z-[1] text-left text-5xl text-text-text-default-black font-body-small ${className}`}
    >
      <h2 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
        <p className="m-0">{`Where are you going `}</p>
        <p className="m-0">today?</p>
      </h2>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq350small:gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
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
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <button className="cursor-pointer [border:none] py-4 px-[27px] bg-input-input-neutral-lighter rounded-radius-radius-56 flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/iconcar24x24.svg"
                />
                <div className="relative text-sm font-semibold font-body-small text-text-text-neutral-dark text-left inline-block min-w-[48px]">
                  Go Now
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-4 px-[29px] bg-input-input-neutral-lighter rounded-radius-radius-56 flex flex-row items-center justify-center">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/iconaddcircle24x24.svg"
                />
                <div className="relative text-sm font-semibold font-body-small text-text-text-neutral-dark text-left inline-block min-w-[108px]">
                  Add your address
                </div>
              </button>
            </button>
          </div>
        </div>
        <Address />
      </div>
    </div>
  );
};

export default Contents;
