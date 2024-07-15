import { FunctionComponent } from "react";
import GpsLocationIcon from "./GpsLocationIcon";
import CardsafetyProtect from "./CardsafetyProtect";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-4 box-border max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[35px] max-w-full">
        <div className="w-[325px] flex flex-row items-start justify-start py-0 px-[46px] box-border max-w-full mq398:pl-5 mq398:pr-5 mq398:box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[30px]">
            <img
              className="h-[21.7px] w-8 relative overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/icontaxioptiona32x32.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
              <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
                <GpsLocationIcon />
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
          </div>
        </div>
        <CardsafetyProtect />
      </div>
    </section>
  );
};

export default FrameComponent;
