import React from "react";
import { IoMdHome } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { RiChatSmileFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa6";
import Image from "next/image";

const iconsList = [
  {
    icon: (
      <IoMdHome
        size={30}
        className="text-[#857ECE] group-hover:text-[#FC392F]"
      />
    ),
    label: "Home",
  },
  {
    icon: (
      <AiFillPieChart
        size={30}
        className="text-[#857ECE] group-hover:text-[#FC392F]"
      />
    ),
    label: "Statistics",
  },
  {
    icon: (
      <RiChatSmileFill
        size={30}
        className="text-[#857ECE] group-hover:text-[#FC392F]"
      />
    ),
    label: "Chat",
  },
  {
    icon: (
      <FaWallet
        size={30}
        className="text-[#857ECE] group-hover:text-[#FC392F]"
      />
    ),
    label: "Wallet",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-[#3226AE] w-[6rem] h-full fixed overflow-visible">
      <div className="px-10">
        <div>Logo</div>
        <div className="py-20">
          {iconsList.map((icon, index) => (
            <div key={index} className="py-[3rem]">
              <div className="hover:bg-white hover:px-10 hover:py-7 hover:rounded-2xl text-center transition-all ease-in-out group flex justify-center z-10 shadow-md overflow-visible">
                <button>{icon.icon}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
