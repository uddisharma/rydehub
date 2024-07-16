import type { NextPage } from "next";
import CentralContainer from "../components/central-container";
import SearchContainer from "../components/search-container";

const Home: NextPage = () => {
  return (
    <div className="w-full relative bg-surface-surface-default-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border leading-[normal] tracking-[normal] font-poppins max-h-[100vh] md:max-h-[90vh] md:mt-10 overflow-y-scroll">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/map.png"
      />

      <section className="self-stretch h-[119px] relative max-w-full">
        {/* <div className="absolute top-[0px] left-[0px] w-[430px] h-[72px] flex flex-row items-start justify-start p-4 box-border max-w-full z-[1]">
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
        </div> */}
        <img
          className="absolute top-[41px] left-[161px] w-8 h-[21.7px] overflow-hidden object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/icontaxioptiona32x32.svg"
        />
      </section>
      <CentralContainer />
      <SearchContainer />
    </div>
  );
};

export default Home;
