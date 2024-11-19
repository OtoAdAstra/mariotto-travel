import "../index.css";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative px-[10%] py-20 mb-5 max-w-[80%] bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc] mx-[10%] mt-[100px] rounded-[30px]">
      <div className="text-center">
        <span className="text-white sm:text-xl md:text-2xl lg:text-3xl font-bold ">
          დაგვიკავშირდით
        </span>
      </div>
      <div className="flex flex-row justify-between mt-5 [@media(max-width:430px)]:flex-col">
        <div className="pt-10">
          <div className="flex py-4">
            <IoIosCall className="text-3xl mr-5" />
            <span className="sm:text-xl md:text-2xl">+995 597 80 99 93</span>
          </div>
          <div className="flex py-4">
            <FaWhatsapp className="text-3xl mr-5" />
            <span className="sm:text-xl md:text-2xl">+995 597 80 99 93</span>
          </div>
          <div className="flex py-4">
            <FaViber className="text-3xl mr-5" />
            <span className="sm:text-xl md:text-2xl">+995 597 80 99 93</span>
          </div>
        </div>
        <div className="flex flex-col justify-around pt-7 [@media(max-width:430px)]:flex-row">
          <a href="">
            <FaFacebook className="text-5xl text-[#1877F2]" />
          </a>
          <a href="" className="">
            <FaTiktok className="text-5xl text-[#ff0050]" />
          </a>
        </div>
      </div>
    </div>
  );
}
