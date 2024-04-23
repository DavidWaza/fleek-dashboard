import React from "react";
import Searchbar from "../../Searchbar/Searchbar";
import { FaBell } from "react-icons/fa";
import Avatar from "../../Avatar/Avatar";

const navList = [
  {
    link: "#",
    label: "Feedback",
  },
  {
    link: "#",
    label: "Contacts",
  },
  {
    link: "#",
    label: "Help",
  },
];
const DesktopHeader = () => {
  return (
    <div>
      <div className="flex gap-10 items-center">
        <Searchbar />
        <div className="flex gap-10 justify-start">
          {navList.map((nav, index) => (
            <div key={index}>
              <p className="text-black font-semibold">{nav.label}</p>
            </div>
          ))}
        </div>
        <div className="ml-auto flex gap-5 items-center">
          <FaBell className="text-[#857ECE]" size={20}/>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
