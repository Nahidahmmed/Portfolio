import image from "../../assets/logo/image2.jpg";
import { HiOutlineDownload } from "react-icons/hi";
import { FaEye } from "react-icons/fa6";
export default function Welcome() {
  return (
    <div className="lg:flex-row-reverse md:flex-row-reverse md:flex w-full lg:px-[10%] md:pt-[15%] pt-[45%] h-screen">
        <div className="w-full lg:w-[50%] md:w-[50%] relative">
        <img
          className="w-[300px] rounded-xl mx-auto md:mt-5 border-4 border-gray-200 hover:border-gradient-500 hover:scale-105 transform transition duration-300 ease-in-out"
          src={image}
          alt=""
        />
      </div>
      <div className="lg:w-[50%] md:w-[50%] lg:pl-28 md:pl-10 mx-5">
        <p className="text-2xl font-mono">Welcome! I'm</p>
        <h1 className="text-7xl font-bold text-[#344955] mt-5">Nahid</h1>
        <p className="text-4xl mt-10">I build websites & web apps!</p>
        <p className="text-lg mt-3">
          I'm a web developer based in Bangladesh, specializing in cutting-edge
          web and mobile technologies as well as pixel-perfect designs.
        </p>
        <div className="flex my-5">
          <button className="flex items-center pl-3 pr-4 py-2 border-[#dddde0] border-2 rounded-s-full text-[#9860d4] font-semibold text-lg uppercase"><HiOutlineDownload className="mx-2"/> Resume</button>
          <button className="flex items-center pl-3 pr-4 py-2 border-[#dddde0] border-y-2 border-r-2 rounded-e-full text-[#9860d4] font-semibold text-lg uppercase"><FaEye className="mr-2"/> Resume</button>
        </div>
        <div>social links in Icons</div>
      </div>
      
    </div>
  );
}
