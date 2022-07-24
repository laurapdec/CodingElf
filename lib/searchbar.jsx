import React from "react";

const SearchBar = ({ inpt }) => {
  const classs = inpt + " grow flex items-center";

  return (
    <form className={classs}>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      {/* <button
        id="dropdown-button"
        dataDropdownToggle="dropdown"
        className="md:hidden  bg-[#fffae2] flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center border border-gray-300 text-gray-900 rounded-l-lg focus:outline-none focus:ring-gray-400 focus:ring-2  "
        type="button"
      >
        Tags
        <svg
          className="ml-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className="hidden z-10 w-44 bg-[#fffae2] rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        dataPopperReferenceHidden=""
        dataPopperEscaped=""
        dataPopperPlacement="top"
        style={{
          position: "absolute",
          inset: "auto auto 0px 0px",
          margin: "0px",
          transform: "translate3d(897px, 5637px, 0px)",
        }}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          ariaLabelledby="dropdown-button"
        >
          <li>
            <button
              type="button"
              className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Mockups
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Templates
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Design
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Logos
            </button>
          </li>
        </ul>
      </div> */}
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
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
          className="bg-[#fffae2] border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-none focus:ring-gray-400 focus:ring-2 block w-full pl-10 p-2.5"
          placeholder="Search"
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-black-800 focus:ring-gray-400 focus:ring-2"
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
  );
};

export default SearchBar;
