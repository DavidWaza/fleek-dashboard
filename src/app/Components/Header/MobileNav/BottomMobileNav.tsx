"use client";
import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { RiChatSmileFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa6";
import Link from "next/link";

const iconsList = [
  {
    icon: (
      <IoMdHome
        size={30}
        className="text-[#857ECE] group-hover:text-[#FC392F]"
      />
    ),
    label: "Home",
    link: "/",
  },
  {
    icon: (
      <AiFillPieChart
        size={30}
        className="text-[#857ECE] group-hover:text-[#FC392F]"
      />
    ),
    label: "Statistics",
    link: "#",
  },
  {
    icon: (
      <RiChatSmileFill
        size={30}
        className="text-[#857ECE] group-hover:text-[#FC392F]"
      />
    ),
    label: "Chat",
    link: "#",
  },
  {
    icon: (
      <FaWallet
        size={30}
        className="text-[#857ECE] group-hover:text-[#FC392F]"
      />
    ),
    label: "Wallet",
    link: "#",
  },
];

const MobileNav = () => {
  const [isIconActive, setIsIconActive] = useState(null);
  

  const handleSetIconActive = (index: any) => {
    setIsIconActive(index);
  };

  return (
    <div className="bg-[#3226AE] rounded-t-[60px] fixed bottom-0 left-0 right-0">
      <div className="px-10">
        <div className="flex gap-[4rem] justify-center">
          {iconsList.map((icon, index) => (
            <div key={index} className="py-5">
              <div
                className={`text-center transition-all ease-in-out group flex justify-center`}
              >
                <button
                  onClick={() => handleSetIconActive(index)}
                  className={
                    isIconActive === index
                      ? "bg-white px-5 py-4 rounded-lg absolute -top-8"
                      : ""
                  }
                >
                  <Link href={icon.link}>{icon.icon}</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
