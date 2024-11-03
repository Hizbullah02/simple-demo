import footerImage from "../assets/images/footerlogo.png";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { PiBeachBallLight } from "react-icons/pi";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="mt-12 bg-[#263238]">
      <div className="grid grid-cols-1 sm:grid-cols-12 justify-between gap-12 px-20 xl:px-[144px] pt-[64px] pb-[73px]">
        <div className="col-span-6 lg:col-span-5  text-[#ffffff] font-inter md:ml-[0px] lg:ml-[21px] mx-auto sm:mx-o">
          <div className="flex">
            <img src={footerImage} alt="mylogo" />
            <h4 className="text-4xl box-border leading-[26px] font-inter font-bold">
              Nexcent
            </h4>
          </div>
          <div className="mt-10 text-center sm:text-start">
            <h5 className="text-sm ">
              &copy; {new Date().getFullYear()} Nexcent Ltd.
            </h5>
            <p className="text-sm mt-2"> All Rights Reserved.</p>
          </div>
          <div className="flex mt-10">
            <div className="bg-gray-700 p-3 rounded-full">
              <FaInstagram size={20} />
            </div>
            <div className=" ml-4 bg-gray-700 p-3 rounded-full">
              <FaTwitter size={20} />
            </div>
            <div className=" ml-4 bg-gray-700 p-3 rounded-full">
              <PiBeachBallLight size={20} />
            </div>
            <div className="ml-4 bg-gray-700 p-3 rounded-full">
              <FaYoutube size={20} />
            </div>
          </div>
        </div>
        {/* 2nd colmn */}
        <div className="col-span-6 lg:col-span-2 mx-auto sm:mx-0">
          <h3 className="font-semibold text-[20px] text-[#ffffff] font-inter">
            Company
          </h3>
          <ul className="font-inter text-sm text-[#F5F7FA] flex flex-col gap-3 mt-6">
            <li className="">About us</li>
            <li className="">Blog</li>
            <li className="">Contact us</li>
            <li className="">Pricing</li>
            <li className="">Testimonials</li>
          </ul>
        </div>
        {/* columns 3 */}
        <div className="col-span-6 lg:col-span-2 text-[#ffffff] mx-auto sm:mx-0">
          <h3 className="font-semibold text-[20px] font-inter">Support</h3>
          <ul className="font-inter text-sm text-[#F5F7FA] flex flex-col gap-3 mt-6">
            <li className="">Help center</li>
            <li className="">Terms of Service</li>
            <li className="">Legal</li>
            <li className="">Privact policy</li>
            <li className="">Status</li>
          </ul>
        </div>
        {/* columns 4 */}
        <div className="col-span-6 lg:col-span-3 text-[#ffffff] lg:mr-[21px] mx-auto sm:mx-0">
          <h3 className="font-semibold text-[20px] font-inter">
            Stay Up to date
          </h3>
          <input
            type="text"
            placeholder="Enter your Email"
            className="w-[145px] mt-6 h-10 rounded-md text-black text-sm bg-[#D9DBE1] placeholder-black pl-2"
          />
          <button className="relative top-[6px] -left-[30px] text-black hover:text-blue-900">
            {" "}
            <FiSend size={24} className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
