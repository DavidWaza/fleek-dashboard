import React from "react";
import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div>
      <div className="flex relative items-center">
        <div className="px-3 absolute">
          <IoSearch className="text-[#3226AE] " />
        </div>
        <input
          placeholder="Search"
          className="rounded-lg bg-[#F9F8FF] py-2 px-10 w-[37rem] text-black"
        />
      </div>
    </div>
  );
};

export default Searchbar;
