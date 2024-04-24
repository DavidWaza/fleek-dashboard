import React from "react";
import { FaChevronRight, FaClock, FaStar } from "react-icons/fa6";
import CardComponent from "../Card/CardComponent";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

const personalCardIconList = [
  {
    icon: <FaPlayCircle size={22} className="text-[#3226AE]" />,
    consumer: "Video",
  },
  {
    icon: <FaClock size={22} className="text-[#00C4FA]" />,
    consumer: "15 mins",
  },
  {
    icon: <FaStar size={22} className="text-[#F73B2D]" />,
    consumer: "12 likes",
  },
];
const UserCard = () => {
  return (
    <div>
      <CardComponent>
        <div className="flex gap-5 items-center">
          <Image
            src={"/assets/avatar.jpg"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-full object-cover w-[3.5rem] h-[3.5rem]"
          />
          <div className="flex flex-col">
            <p className="text-black font-semibold">Lilly Donovan</p>
            <p className="text-[#D9D9E5] text-sm">Business trainer</p>
          </div>
        </div>
        <div className="py-3">
          <p className="text-black text-xl font-semibold">
            How to properly manage your <br /> personal budget?
          </p>
        </div>
        <div className="flex items-center gap-5 py-4">
          {personalCardIconList.map((x, index) => (
            <div className="flex gap-3" key={index}>
              {x.icon}
              <p className="text-[#605F71] text-sm lg:text-lg">{x.consumer}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center py-5">
          <p className="text-[#605F71]">5 days ago</p>
          <button className="flex text-sm items-center justify-between bg-[#3226AE] w-[8rem] px-4 py-3 rounded-3xl">
            Connect
            <FaChevronRight size={12} />
          </button>
        </div>
      </CardComponent>
    </div>
  );
};

export default UserCard;
