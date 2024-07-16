import type { NextPage } from "next";
import { CardpickupDropOffType } from "../types";

const CardpickupDropOff: NextPage<CardpickupDropOffType> = ({
  className = "",
  ride,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px] max-w-full text-left text-sm text-text-text-neutral font-body-small ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-px">
          <div className="w-5 h-[79px] relative">
            <div className="absolute top-[17px] left-[9px] box-border w-[1.7px] h-[63.7px] border-r-[1.7px] border-solid border-border-border-primary" />
            <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-5 h-5 z-[1] border-[0px] border-solid border-border-border-primary" />
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
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[7.5px] min-w-[209px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start">
            <div className="relative inline-block min-w-[46px]">Pick-up</div>
            <div className="relative font-medium text-text-text-neutral-dark inline-block min-w-[119px]">
              {ride?.start_location}
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-line-line-neutral-light" />
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start">
            <div className="relative inline-block min-w-[111px]">Drop off</div>
            <div className="relative font-medium text-text-text-neutral-dark">
              {ride?.end_location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardpickupDropOff;
