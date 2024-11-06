import { useState } from "react";
import Navlogo from "../assets/images/Logo.png";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex bg-[#F5F7FA] px-2 lg:px-10 xl:px-[105px] justify-between items-center py-3">
      <div className="w-[156px] h-[24px]">
        <img src={Navlogo} alt="logo" />
      </div>
      <ul className="hidden lg:flex">
        <li className="px-4 ">
          <a className="hover:text-[#717171]" href="/home">
            Home
          </a>
        </li>
        <li className="px-4">
          <a className="hover:text-[#717171]" href="/service">
            Service
          </a>
        </li>
        <li className="px-4">
          <a className="hover:text-[#717171]" href="/feature">
            Feature
          </a>
        </li>
        <li className="px-4">
          <a className="hover:text-[#717171]" href="/product">
            Product
          </a>
        </li>
        <li className="px-4">
          <a className="hover:text-[#717171]" href="/testimonial">
            Testimonial
          </a>
        </li>
        <li className="px-4">
          <a className="hover:text-[#717171]" href="/faq">
            Faq
          </a>
        </li>
      </ul>
      {/* responsive */}
      <ul
        className={`fixed top-[76px] duration-300 px-4 w-full bg-slate-400 lg:hidden block font-inter ${
          toggle ? "left-[0]" : "left-[-100%]"
        }`}
      >
        <li className="py-3">
          <a href="/home">Home</a>
        </li>
        <li className="py-3">
          <a href="/service">Service</a>
        </li>
        <li className="py-3">
          <a href="/feature">Feature</a>
        </li>
        <li className="py-3">
          <a href="/product">Product</a>
        </li>
        <li className="py-3">
          <a href="/testimonial">Testimonial</a>
        </li>
        <li className="py-3">
          <a href="/faq">Faq</a>
        </li>
      </ul>
      <div className="flex items-center gap-2 sm:gap-4 font-inter text-[14px] font-medium">
        <a href="/Login">
          <button className="px-2 sm:px-5 py-[10px] rounded-md hover:bg-[#e0e0e0] shadow-md">
            Login
          </button>
        </a>
        <a href="/signup">
          <button className="px-2 sm:px-5 py-[10px] bg-[#4CAF4F] hover:bg-[#246427] shadow-md text-white rounded-md">
            Sign up
          </button>
        </a>
        {toggle ? (
          <IoClose
            size={24}
            onClick={() => setToggle(!toggle)}
            className="lg:hidden sm:mx-2 bg-blue-900"
          />
        ) : (
          <IoMenu
            size={24}
            onClick={() => setToggle(!toggle)}
            className="lg:hidden sm:mx-2"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
