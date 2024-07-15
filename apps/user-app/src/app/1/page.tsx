import type { NextPage } from "next";
import FrameComponent from "../../components/frame-component";
import Contents from "../../components/contents";

const Home1: NextPage = () => {
  return (
    <div className="w-full relative bg-surface-surface-default-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border leading-[normal] tracking-[normal]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/map@2x.png"
      />
      <header className="self-stretch flex flex-row items-start justify-between p-4 gap-[20px] z-[1] text-left text-xs text-text-text-default-black font-body-small">
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
      <section className="self-stretch h-[110px] relative max-w-full">
        <div className="absolute top-[0px] left-[0px] w-[430px] h-[72px] flex flex-row items-start justify-start p-4 box-border max-w-full z-[1]">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start max-w-full">
            <div className="h-10 w-10 relative flex items-center justify-center">
              <img
                className="h-full w-full object-contain absolute left-[2px] top-[2px] [transform:scale(2)]"
                loading="lazy"
                alt=""
                src="/iconmenubar40x40.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute top-[45px] left-[158px] w-8 h-[21.7px] overflow-hidden object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/icontaxioptiona32x32.svg"
        />
      </section>
      <img
        className="w-8 h-[25px] relative overflow-hidden shrink-0 hidden z-[3]"
        alt=""
        src="/iconorderride32x32.svg"
      />
      <img
        className="w-10 h-10 relative hidden z-[4]"
        alt=""
        src="/icongpsblack40x401.svg"
      />
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
        <Contents />
      </section>
    </div>
  );
};

export default Home1;
