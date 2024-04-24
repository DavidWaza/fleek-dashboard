import React from "react";
import Image from "next/image";

interface cardProps {
  img: string;
  consumer: string;
  tally: string;
  className: string;
}
const Card: React.FC<cardProps> = (props) => {
  return (
    <div className={`shadow-lg ${props.className} rounded-2xl`}>
      <div className="xl:flex xl:gap-5 items-center px-10 w-full">
        {/* Render image at the bottom on mobile */}
        <div className="xl:block hidden">
          {/* Render image at the top on desktop */}
          <Image
            src={props.img}
            alt="card"
            width={140}
            height={140}
            className="w-[4.5rem] h-[4.5rem] xl:w-[100px] xl:h-[100px]"
          />
        </div>
        <div className="flex flex-col py-7 ">
          <p className="uppercase text-[10px] xl:text-[12px] font-semibold text-[#CCCBDC]">
            {props.consumer}
          </p>
          <p className="xl:text-[26px] text-[16px] font-bold">{props.tally}</p>
        </div>
        <div className="xl:hidden block">
          {/* Render image at the top on desktop */}
          <Image
            src={props.img}
            alt="card"
            width={0}
            height={0}
            sizes="10vw"
            className="w-[5.5rem] h-auto object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
