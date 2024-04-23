import Image from "next/image";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { LuPencilLine } from "react-icons/lu";
import Taxi from "/public/assets/taxi.svg";
import Shopping from "/public/assets/shopping.svg";
import Netflix from "/public/assets/netflix.svg";

const transactionHistory = [
  {
    img: Taxi,
    transactionLabel: "Taxi",
    time: "01:21 PM",
    amount: "-$9,20",
  },
  {
    img: Shopping,
    transactionLabel: "Shopping",
    time: "11:15 AM",
    amount: "-$142,00",
  },
  {
    img: Netflix,
    transactionLabel: "Netflix",
    time: "Jan 10, 2020",
    amount: "-24.99",
  },
];

const MobileTransactionComponent = () => {
  return (
    <div>
      <div className="w-full px-10 pb-20 h-full rounded-xl">
        <div className="flex justify-end py-10 px-5 text-black">
          <LuPencilLine className="text-[#CCCBDC]" />
        </div>
        <div className="ml-auto flex justify-center bg-[#3A24AC] rounded-xl py-4 px-6 w-[6rem] shadow-xl">
          <p className="">$10,660</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-full flex justify-center items-center p-20 w-32 h-32">
            <div className="bg-white shadow-xl rounded-full px-10 flex justify-center items-center w-[6rem] h-[6rem]">
              <p className="text-[#3A24AC] font-bold text-3xl">
                38<span className="text-sm">%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-black font-semibold">My card</p>
          <div>
            <button>
              <BiDotsHorizontalRounded className="text-black" />
            </button>
          </div>
        </div>
        <div className="py-8">
          <Image
            src={"/assets/card.svg"}
            alt=""
            width={0}
            height={0}
            sizes="100vh"
            className="object-contain object-center w-full h-auto shadow-xl rounded-[2rem]"
          />
        </div>
        <div className="py-5">
          <div className="flex justify-between">
            <p className="capitalize text-black font-semibold">transaction</p>
            <Image
              src={"/assets/add.svg"}
              alt=""
              width={0}
              height={0}
              sizes="100vh"
              className="object-contain object-center w-8 h-auto shadow-xl"
            />
          </div>
        </div>
        {transactionHistory.map((trans, index) => (
          <div className="flex justify-between py-5" key={index}>
            <div className="flex gap-6">
              <div className="bg-white p-4 rounded-xl">
                <Image
                  src={trans.img}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vh"
                  className={`object-contain object-center  h-auto shadow-xl ${
                    trans.transactionLabel === "Netflix" ? "w-3" : "w-5"
                  }`}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-black font-medium">
                  {trans.transactionLabel}
                </p>
                <p className="text-[#C4BDD5] text-[12px]">{trans.time}</p>
              </div>
            </div>
            <div>
              <p className="text-black font-medium">{trans.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileTransactionComponent;
