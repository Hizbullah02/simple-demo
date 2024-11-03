import { FaArrowRightLong } from "react-icons/fa6";

const FringillaText = () => {
  return (
    <div className="text-center mt-[24px] py-8">
      <h1 className="text-[48px] md:text-[64px] semibold text-[#263238] font-inter">
        Pellentesque suscipit <br /> fringilla libero eu.
      </h1>
      <button className="flex  items-center mt-4 mx-auto bg-[#4CAF4F] rounded-md hover:bg-[#246427] text-white px-8 py-[14px]">
        <span className="text-[16px] font-inter">Get a Demo </span>
        <FaArrowRightLong className="ml-4" />
      </button>
    </div>
  );
};

export default FringillaText;
