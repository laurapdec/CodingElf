import React from "react";
import Link from "next/link";

const categories = [
  { name: "About Us", slug: "about-us" },
  { name: "Home", slug: "" },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-[#cde1a8]">
      <div className="flex justify-around  w-full inline-block border-blue-400 py-8">
        <div className="md:float-left flex items-center">
          <img 
            src="../Elfo.jpg"
            className="mr-3 h-20 "
            alt="Coding Elf Logo"
              />
          <Link href="/" >
            <span className="cursor-pointer font-bold text-4xl text-gray-800">
              Coding \\ Elf
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <form className="grow flex items-center ml-6 mr-6">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-[#fffae2] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-[#fffae2] dark:border-[#ccc8b5] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-gray-900 rounded-lg border border-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:hover:bg-black dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </form>
          {categories.map((category) => (
            <Link key={category.slug} href={`/${category.slug}`}>
              <span className="md:float-right hover:text-black whitespace-nowrap m-2 flex items-center align-middle  ml-4 font-semibold text-gray-800 cursor-pointer">
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
