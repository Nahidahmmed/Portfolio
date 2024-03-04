import image from "../../assets/logo/image2.jpg";

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
        <div>
          <button>resume</button>
          <button>resume</button>
        </div>
        <div>social links in Icons</div>
      </div>
      
    </div>
  );
}
