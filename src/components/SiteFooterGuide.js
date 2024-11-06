import image from "../assets/images/sitefooterguide.png";

const SiteFooterGuide = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-12 justify-between px-4 sm:px-10 xl:px-[144px] items-center mx-0 pt-[42px]">
      <div className="col-span-1 md:col-span-6 lg:col-span-5 ">
        <img className="mx-auto md:mx-0" src={image} alt="site" />
      </div>
      <div className="col-span-1 md:col-span-6 lg:col-span-7 lg:mr-8 mt-8 md:mt-0">
        <h1 className="text-[#4D4D4D] text-[36px] font-bold ">
          How to design your site footer like we did
        </h1>
        <p className="text-[14px] text-[#717171] mt-4">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <a href="/learnmore2">
          <button className="mt-8 rounded-md px-4 py-[6px] bg-[#4CAF4F] hover:bg-[#246427] text-[#fff] text-[16px] active:bg-[#388E3B]">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

export default SiteFooterGuide;
