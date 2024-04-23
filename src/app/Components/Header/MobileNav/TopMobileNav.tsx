import React from "react";
import Image from "next/image";
import { FaBell } from "react-icons/fa6";
import Avatar from "../../Avatar/Avatar";

const TopMobileNav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-5">
      <div className="flex justify-between">
        <Image
          src={"/assets/logo-mobile.svg"}
          alt="logo"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-7 object-contain object-center"
        />
        <div className="ml-auto flex gap-5 items-center">
          <FaBell className="text-[#857ECE]" size={20} />
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default TopMobileNav;
