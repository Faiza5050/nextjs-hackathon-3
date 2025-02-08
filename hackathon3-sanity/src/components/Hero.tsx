import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <div className=" -mt-10 bg-white p-36 flex justify-center items-center h-[800px]">
        <div className="w-[1150px] h-[600px] pl-18 m-32 sm:m-4 items-center bg-[#00000040] flex rounded-bl-3xl shadow-lg p-8 relative">
          <div className="w-1/2 flex flex-col justify-center space-y-6 sm:w-full md:w-1/2">
            <h1 className="text-gray-600 text-sm uppercase tracking-wide">
              Welcome to Chairy
            </h1>
            <p className="text-xl md:text-5xl font-bold leading-tight text-gray-800">
              Best Furniture <br /> Collection For <br /> Your Interior.
            </p>
            <Link href="../product" className="hover:underline">
            <button className="bg-[#029FAE] text-white w-[200] sm:w-full md:w-[200px] mt-20 px-10 py-2 rounded-lg hover:bg-blue-600  flex items-center gap-4">
              Shop Now <span className="ml-2 text-xl">→</span>
            </button>
          </Link>
            
          </div>

          <div className="w-1/2 relative mt-10 sm:w-full sm:ml-20 md:w-1/2">
            <Image
              src="/chair.png"
              alt="Chair"
              height={50}
              width={100}
              className="w-[350px] h-[450px] object-contain mx-auto sm:w-[250px] md:w-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-items items-center px-32 w-full sm:w-full md:w-[1321px] h-[139px] flex-wrap">
        <Image
          src="/card1.jpg"
          alt="logo"
          height={50}
          width={100}
          className="w-[80px] h-[90px] object-contain mx-auto"
        />
        <Image
          src="/card2.jpg"
          alt="logo"
          height={50}
          width={100}
          className="w-[80px] h-[90px] object-contain mx-auto"
        />
        <Image
          src="/card3.jpg"
          alt="logo"
          height={50}
          width={100}
          className="w-[80px] h-[90px] object-contain mx-auto"
        />
        <Image
          src="/card4.jpg"
          alt="logo"
          height={50}
          width={100}
          className="w-[80px] h-[90px] object-contain mx-auto"
        />
        <Image
          src="/card5.jpg"
          alt="logo"
          height={50}
          width={100}
          className="w-[80px] h-[90px] object-contain mx-auto"
        />
        <Image
          src="/card6.jpg"
          alt="logo"
          height={50}
          width={100}
          className="w-[80px] h-[90px] object-contain mx-auto"
        />
        <Image
          src="/card7.jpg"
          alt="logo"
          height={50}
          width={100}
          className="w-[80px] h-[90px] object-contain mx-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
