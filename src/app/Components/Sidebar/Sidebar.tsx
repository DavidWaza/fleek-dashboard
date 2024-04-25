"use client";
import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { RiChatSmileFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa6";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  const [isColorActive, setIsColorActive] = useState("text-[#857ECE]");

  const iconsList = [
    {
      icon: (
        <IoMdHome
          size={27}
          className={isColorActive ? "text-[#FC392F]" : "text-[#857ECE]"}
        />
      ),
      label: "Home",
      link: "/",
    },
    {
      icon: (
        <AiFillPieChart
          size={27}
          className={!isColorActive ? "text-[#FC392F]" : "text-[#857ECE]"}
        />
      ),
      label: "Statistics",
      link: "/statistics",
    },
    {
      icon: (
        <RiChatSmileFill
          size={27}
          className={!isColorActive ? "text-[#FC392F]" : "text-[#857ECE]"}
        />
      ),
      label: "Chat",
      link: "/chat",
    },
    {
      icon: (
        <FaWallet
          size={27}
          className={!isColorActive ? "text-[#FC392F]" : "text-[#857ECE]"}
        />
      ),
      label: "Wallet",
      link: "/wallet",
    },
  ];
  return (
    <div className="bg-[#3226AE] w-[6rem] h-full fixed overflow-visible">
      <div className="px-10">
        <div className="">
          <Image
            src={"/assets/logo-desktop.svg"}
            alt="loho"
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-auto object-cover object-center pt-12"
          />
        </div>
        <div className="py-[10rem]">
          {iconsList.map((icon, index) => (
            <div key={index} className="py-[1.3rem]">
              <Link href={icon.link}>
                <div className=" text-center transition-all ease-in-out group flex justify-center z-10 overflow-visible">
                  <button
                    className={`px-4 py-3  rounded-lg transition-all ease-in-out ${
                      pathname === icon.link
                        ? "bg-white ml-20 shadow-lg text-[#FC392F]"
                        : ""
                    }`}
                  >
                    {icon.icon}
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
