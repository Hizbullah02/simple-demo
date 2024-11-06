import image from "../assets/images/meetCustomers.png";
import imag1 from "../assets/images/client1.png";
import imag2 from "../assets/images/client2.png";
import imag3 from "../assets/images/client3.png";
import imag4 from "../assets/images/client4.png";
import imag5 from "../assets/images/client5.png";
import imag6 from "../assets/images/client6.png";
import { FaArrowRightLong } from "react-icons/fa6";

const MeetCutomers = () => {
  const images = [imag1, imag2, imag3, imag4, imag5, imag6];
  return (
    <div className="px-4 sm:px-10 xl:px-[144px] grid grid-cols-1 md:grid-cols-12 gap-4 mt-12 py-8 bg-[#F5F7FA]">
      {/* left-side */}
      <div className="col-span-1 md:col-span-6 lg:col-span-4 sm:max-w-[326px] mx-auto md:mx-0">
        <img className="w-full" src={image} alt="meetCust" />
      </div>
      {/* right-side */}
      <div className="col-span-1 md:col-span-6 lg:col-span-8 ml-2px">
        <p className="text-[14px] text-[#717171] mt-4 md:mt-0">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h3 className="text-[#4CAF4F] text-[20px] mt-4">Tim smith</h3>
        <p className="mt-2 text-[#89939E] text-[16px]">
          British Dragon Boat Racing Association
        </p>
        <div className="flex flex-wrap justify-between py-8">
          {images.map((image, key) => {
            return (
              <div className="">
                <img src={image} alt={`client-${key + 1}`} />
              </div>
            );
          })}
          <a
            href="/customers"
            class="flex  text-[#4caf4f] font-bold text-[20px] items-center px-2 py-2"
          >
            Meet All Customers
            <FaArrowRightLong size={20} className="ml-2 mt-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MeetCutomers;
