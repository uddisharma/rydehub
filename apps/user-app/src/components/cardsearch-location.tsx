import type { NextPage } from "next";

export type CardsearchLocationType = {
  className?: string;
};

const CardsearchLocation: NextPage<CardsearchLocationType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch shadow-[0px_2px_20px_rgba(0,_0,_0,_0.1)] rounded-spacing-spacing-24 bg-surface-surface-default-white flex flex-row items-center justify-between p-4 box-border max-w-full gap-[16px] z-[1] text-left text-base text-text-text-neutral-dark font-body-small ${className}`}
    >
      <div className="w-[326px] rounded-radius-radius-56 bg-input-input-neutral-lighter flex flex-row items-center justify-start py-2.5 px-4 box-border max-w-[calc(100%_-_40px)]">
        <div className="flex flex-row items-center justify-start py-0 pr-1 pl-0 gap-[8px]">
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
            src="/iconssearch24x24.svg"
          />
          <div className="relative font-semibold">{`2972 Westheimer Rd. Santa Ana `}</div>
        </div>
      </div>
      <input className="m-0 h-6 w-6 relative" type="checkbox" />
    </div>
  );
};

export default CardsearchLocation;
