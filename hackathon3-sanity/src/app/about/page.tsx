import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-[1121px] mx-auto px-14 py-8">
      
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
        
        <div className="w-full lg:w-[672px] lg:h-[478px] bg-teal-700 text-white p-14 rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
            <p className="text-gray-200 mb-6">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
          </div>
          <button className="bg-white text-teal-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 max-w-[179px]">
            View collection
          </button>
        </div>

        <div className="w-full lg:w-[672px] lg:h-[478px] bg-gray-200 rounded-lg">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src="/chair1.jpg"
            alt="About Comforty"
            height={50}
            width={100}
          />
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          What Makes Our Brand Different
        </h2>
      </div>
      <div className="flex flex-wrap gap-2 justify-between mb-12 pl-10">
        
        <div className="w-full sm:w-[180px] h-[244px]  bg-gray-100 rounded-lg flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-2 text-center text-[#007580]">
            Next day as standard
          </h3>
          <p className="text-sm text-center text-[#007580]">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        <div className="w-full sm:w-[200px] h-[244px] p-4 bg-gray-100 rounded-lg flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-2 text-center text-[#007580]">
            Made by true artisans
          </h3>
          <p className="text-sm text-[#007580] text-center">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>

        <div className="w-full sm:w-[180px] h-[244px] p-4 bg-gray-100 rounded-lg flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-2 text-center text-[#007580]">
            Unbeatable prices
          </h3>
          <p className="text-sm text-[#007580] text-center">
            For our materials and quality, you won’t find better prices
            anywhere.
          </p>
        </div>

        <div className="w-full sm:w-[309px] h-[244px] p-4 bg-gray-100 rounded-lg flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-2 text-center text-[#007580]">
            Recycled packaging
          </h3>
          <p className="text-sm text-[#007580] text-center">
            We use 100% recycled to ensure our footprint is more manageable.
          </p>
        </div>
      </div>

      <div className="text-center mt-12 mb-8">
        <h2 className="text-3xl font-bold">Our Popular Products</h2>
      </div>
      <div className="flex flex-wrap gap-4 mt-20 -mb-20 justify-between">
        
        <div className="w-full sm:w-[530px] h-[462px]">
          <div className="h-[275px] rounded-lg mb-4">
            <Image
              className="w-full h-full object-cover"
              src="/sofa.jpg"
              alt="The Poplar suede sofa"
                height={50}
                width={100}
            />
          </div>
          <h3 className="text-lg font-semibold ml-4">The Poplar suede sofa</h3>
          <p className="text-gray-600 ml-4">$99.00</p>
        </div>

        <div className="w-full sm:w-[200px] h-[462px]">
          <div className="h-[275px] rounded-lg mb-4">
            <Image
              className="w-full h-full object-cover"
              src="/chair10.jpg"
              alt="The Dandy chair"
                height={50}
                width={100}
            />
          </div>
          <h3 className="text-lg font-semibold ml-4">The Dandy chair</h3>
          <p className="text-gray-600 ml-4">$99.00</p>
        </div>

        <div className="w-full sm:w-[200px] h-[462px]">
          <div className="h-[275px] rounded-lg mb-4">
            <Image
              className="w-full h-full object-cover"
              src="/chair11.jpg"
              alt="The Dandy chair"
                height={50}
                width={100}
            />
          </div>
          <h3 className="text-lg font-semibold ml-4">The Dandy chair</h3>
          <p className="text-gray-600 ml-4">$99.00</p>
        </div>
      </div>
    </div>
  );
};

export default About;
