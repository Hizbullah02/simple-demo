import heroimg from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="bg-[#F5F7FA] px-8 lg:px-32 xl:px-[144px] md:flex justify-between py-24 ">
      {/* left side */}
      <div className="flex flex-col justify-center sm:items-center md:items-start font-semibold ">
        <h1 className="text-5xl md:text-[50px] xl:text-[64px] leading-[76px] text-[#4d4d4d]">
          Lessons and insights <br className="inline" />
          <span className="text-[#4CAF4F]"> from 8 years </span>
        </h1>
        <p className="text-[16px] text-[#717171] mt-4">
          Where to grow your business as a photographer: site or social media?
        </p>
        <div>
          <a href="/register">
            <button className="px-8 py-3.5 mt-8 bg-[#4CAF4F] hover:bg-[#246427] shadow-md text-white rounded-md">
              Register
            </button>
          </a>
        </div>
      </div>
      {/* right side */}
      <div className="max-w-[300px] xl:w-[391px] h-[407px] m-auto md:m-0 mt-8 md:mt-0">
        <img className="w-full" src={heroimg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
