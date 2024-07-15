import type { NextPage } from "next";
import CardsearchLocation from "./cardsearch-location";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-4 box-border max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[20px] max-w-full">
        <div className="w-[169px] h-[50px] flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border gap-[20px]">
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
        <CardsearchLocation />
      </div>
    </section>
  );
};

export default FrameComponent2;
