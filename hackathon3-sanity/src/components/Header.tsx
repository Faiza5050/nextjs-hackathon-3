"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import Image from "next/image";
import useCartStore from "@/store/useCartStore";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCartStore();

  return (
    <header className="w-full mt-2 pl-36 pr-40">
      
      <div className="bg-[#1F1B2E] text-white text-sm py-2 px-4 flex flex-wrap items-center justify-between lg:px-8">
        
        <div className="hidden lg:block">
          ✔ Free Shipping On All Orders Over $50
        </div>

        
        <div className="flex flex-wrap justify-center w-full lg:w-auto space-x-4 items-center mt-2 lg:mt-0">
          <button className="hover:underline">Eng</button>
          <Link href="/faqs">
            <button className="hover:underline">FAQs</button>
          </Link>
          <AiTwotoneExclamationCircle className="hidden sm:block" />
          <Link href="/contact">
            <button className="hover:underline">Need Help</button>
          </Link>
        </div>
      </div>

      <div className="bg-[#F8F9FA] py-4 px-4 border-b border-gray-300 lg:px-2">
        <div className="w-full max-w-[1321px] mx-auto flex justify-between items-center">
          
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg">
              <Image src="/logo.jpg" alt="logo" height={50} width={100} />
            </div>
            <span className="text-lg font-semibold">Comforty</span>
          </div>

          <button
            className="lg:hidden text-2xl ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <Link href="/cart" className="flex items-center gap-2 hover:underline">
            <BsCartCheck />
            <span>Cart ({cartItems.length})</span>
          </Link>

        </div>
      </div>

      <div className="max-w-[1321px] mx-auto mt-4 hidden lg:flex justify-between items-center">
        <nav className="flex space-x-6 text-sm font-medium">
          <Link href="/" className="text-teal-500 hover:underline">
            Home
          </Link>
          <Link href="/pages" className="hover:underline">
            Shop
          </Link>
          <Link href="/product" className="hover:underline">
            Product
          </Link>
          <Link href="/pages" className="hover:underline">
            Pages
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </nav>

        <div className="w-45 h-8">
          <Link href="/contact" className="hover:underline">
            Contact: (805) 555-0111
          </Link>
        </div>
      </div>

      {menuOpen && (
        <nav className="bg-[#F8F9FA] p-4 text-sm font-medium lg:hidden max-w-[1321px] mx-auto">
          
          <div className="flex mt-4 space-y-2">
            <div className="flex w-40 h-8 px-2 shadow-md hover:shadow-lg">
              <Link href="/contact" className="flex hover:underline">
                <FaPhoneVolume />
                <span className="text-sm px-4">(805) 555-0111</span>
              </Link>
            </div>
            <Link href="/cart" className="flex items-center gap-2 hover:underline">
              <BsCartCheck />
              <span>Cart ({cartItems.length})</span>
            </Link>
          </div>

          <div className="space-y-2">
            <Link href="/" className="block text-teal-500 hover:underline">
              Home
            </Link>
            <Link href="/pages" className="block hover:underline">
              Shop
            </Link>
            <Link href="/product" className="block hover:underline">
              Product
            </Link>
            <Link href="/pages" className="block hover:underline">
              Pages
            </Link>
            <Link href="/about" className="block hover:underline">
              About
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
