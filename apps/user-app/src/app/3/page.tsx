import type { NextPage } from "next";
import Content from "../../components/content";
import SearchContainer1 from "../../components/search-container1";

const SelectRide: NextPage = () => {
  return (
    <div className="w-full relative bg-surface-surface-default-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border gap-[84px] leading-[normal] tracking-[normal]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/map@2x.png"
      />
      <Content />
      <SearchContainer1 />
    </div>
  );
};

export default SelectRide;
