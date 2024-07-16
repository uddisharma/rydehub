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

      <section className="self-stretch h-[110px] relative max-w-full">
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
