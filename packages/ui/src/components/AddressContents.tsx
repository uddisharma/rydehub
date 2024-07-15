import { FunctionComponent } from "react";

export type AddressContentsType = {
  className?: string;
};

const AddressContents: FunctionComponent<AddressContentsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-sm text-text-text-neutral-dark font-body-small mq350small:gap-[16px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[33px] pl-0 gap-[24px]">
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
  );
};

export default AddressContents;
