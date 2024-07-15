import type { NextPage } from "next";

export type CardsafetyProtectType = {
  className?: string;
};

const CardsafetyProtect: NextPage<CardsafetyProtectType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch shadow-[0px_2px_20px_rgba(0,_0,_0,_0.1)] rounded-spacing-spacing-24 bg-surface-surface-default-white flex flex-row flex-wrap items-start justify-start p-4 gap-[16px] z-[1] text-left text-base text-text-text-neutral-dark font-poppins  ${className}`}
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
  );
};

export default CardsafetyProtect;
