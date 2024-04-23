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

const MobileNav = () => {
  return (
    <div className="bg-[#3226AE] rounded-t-[60px] fixed bottom-0 left-0 right-0">
      <div className="px-10">
        <div className="flex gap-10 justify-center">
          {iconsList.map((icon, index) => (
            <div key={index} className="py-5">
              <div className="hover:bg-white hover:px-10 hover:py-7 hover:rounded-2xl text-center transition-all ease-in-out group flex justify-center ">
                <button>{icon.icon}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
