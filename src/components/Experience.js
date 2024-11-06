import image from "../assets/images/experience.png";

const Experience = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 ga-4 lg:gap-12 justify-between px-4 sm:px-10 xl:px-[144px] items-center mx-0 pt-[42px]">
      <div className="col-span-1 md:col-span-6 lg:col-span-5 ">
        <img className="mx-auto md:mx-0" src={image} alt="exp" />
      </div>
      <div className="col-span-1 md:col-span-6 lg:col-span-7 lg:mr-8 mt-8 md:mt-0">
        <h1 className="text-[#4D4D4D] text-[36px] font-bold ">
          The unseen of spending three years at Pixelgrade
        </h1>
        <p className="text-[14px] text-[#717171] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <a href="/learnmore">
          <button className="mt-8 rounded-md px-4 py-[6px] bg-[#4CAF4F] hover:bg-[#246427] text-[#fff] text-[16px] active:bg-[#388E3B]">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Experience;
