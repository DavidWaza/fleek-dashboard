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
    <div>
      <div className={`shadow-lg ${props.className} rounded-2xl`}>
        <div className=" flex gap-5 items-center px-10">
          <div className="">
            <Image
              src={props.img}
              alt="card"
              width={0}
              height={0}
              sizes="10vw"
              className="w-[3.5rem] h-[3.5rem]"
            />
          </div>
          <div className="flex flex-col py-7">
            <p className="uppercase text-[12px] font-semibold text-[#CCCBDC]">
              {props.consumer}
            </p>
            <p className="text-[26px] font-bold">{props.tally}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
