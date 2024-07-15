import { FunctionComponent } from "react";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch h-[180.5px] relative text-center text-xl text-surface-surface-default-white font-body-small ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[430px] h-14 flex flex-row items-center justify-start p-4 box-border z-[1]">
        <div className="h-10 w-10 relative flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[2px] top-[2px] [transform:scale(2)]"
            loading="lazy"
            alt=""
            src="/iconmenuback40x40.svg"
          />
        </div>
      </div>
      <img
        className="absolute top-[137px] left-[38px] w-8 h-[21.7px] overflow-hidden z-[1]"
        loading="lazy"
        alt=""
        src="/icontaxioptiona32x32-1.svg"
      />
      <div className="absolute top-[6px] left-[102px] w-[272.2px] h-[174.5px]">
        <img
          className="absolute top-[35px] left-[86px] w-8 h-[21.7px] overflow-hidden z-[2]"
          loading="lazy"
          alt=""
          src="/icontaxioptiona32x32-1.svg"
        />
        <div className="absolute top-[0px] left-[0px] w-full h-full flex flex-col items-start justify-start z-[3]">
          <div className="w-[69px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative">
            <img
              className="h-[127.5px] w-[229.5px] absolute !m-[0] right-[-179.5px] bottom-[-98.5px]"
              alt=""
              src="/line.svg"
            />
            <img
              className="h-[34px] w-[34px] absolute !m-[0] right-[27px] bottom-[-18px] z-[1]"
              alt=""
              src="/droplabel.svg"
            />
            <div className="h-[76px] flex-1 relative z-[2]">
              <div className="absolute h-[64.47%] w-full top-[0%] right-[0%] bottom-[35.53%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-border-border-primary" />
                <div className="absolute h-[77.55%] w-[44.9%] top-[8.16%] right-[26.53%] bottom-[14.29%] left-[28.57%] flex flex-col items-start justify-start z-[1]">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[22px] shrink-0">
                    20
                  </a>
                  <div className="flex flex-row items-start justify-start py-0 px-px mt-[-8px] text-xs text-line-line-neutral-light">
                    <div className="relative leading-[14px] inline-block min-w-[20px] shrink-0">
                      min
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="absolute h-[46.05%] top-[53.95%] bottom-[0%] left-[52.04%] max-h-full w-0 object-contain z-[2]"
                loading="lazy"
                alt=""
                src="/line-15.svg"
              />
            </div>
          </div>
          <img
            className="w-[33.2px] h-[33.2px] absolute !m-[0] right-[0px] bottom-[10.3px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/pickuplocation@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation1;
