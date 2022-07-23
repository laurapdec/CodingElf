import React from "react";
import Link from "next/link";
import Image from "next/image";
import elfoPic from "../public/elf_bgwhite.svg";
import { SearchBar } from "../lib";

const categories = [
  { name: "About Us", slug: "about-us" },
  { name: "Home", slug: "" },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-[#cde1a8]">
      <div className="flex justify-around  w-full inline-block border-blue-400 py-8">
        <div className="md:float-left flex items-center px-2 mx-1">
          <a href="https://codingelf.com/" className=" flex items-center">
            <div className="mx-4">
              <Image 
                src={elfoPic}
                className="rounded-md "
                alt="Coding Elf Logo"
                width="80px"
                height="80px"
                  />
            </div>
            <span className="cursor-pointer font-bold text-4xl text-gray-800">
              Coding \\ Elf
            </span>
          </a>
        </div>
        <div className="hidden md:float-left md:contents">
          <SearchBar inpt={'px-4'}/>            
          {categories.map((category) => (
            <Link key={category.slug} href={`/${category.slug}`}>
              <span className="md:float-right hover:text-black whitespace-nowrap p-2 mx-1 flex items-center align-middle font-semibold text-gray-800 cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <SearchBar inpt={'mb-6'}/>
        <div className="flex justify-around md:float-left">
          {categories.map((category) => (
            <Link key={category.slug} href={`/${category.slug}`}>
              <span className="hover:text-black whitespace-nowrap p-2 flex items-center text-lg align-middle border-gray-700/20 hover:border-gray-700/70 border-b-2 font-semibold text-gray-800 cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
