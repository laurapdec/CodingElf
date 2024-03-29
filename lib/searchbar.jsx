import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SearchBar = ({ inpt , handleSearch}) => {
  const classs = inpt + " grow flex items-center";

  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.query.q) {
      const searchQuery = router.query.q;
      handleSearch(searchQuery);
    }
  }, [router.query.q]);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission behavior
    router.push(`/search?q=${query}`);
    handleSearch(query); // call handleSearch with the current value of query
  };


  return (
    <form className={classs} onSubmit={handleSubmit}>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
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
          id="searchbar"
          className="bg-[#fffae2] border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-none focus:ring-gray-400 focus:ring-2 block w-full pl-10 p-2.5"
          placeholder="Search"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        aria-label="Submit search"
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
