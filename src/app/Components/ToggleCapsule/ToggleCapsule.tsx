"use client";
import React, { useState } from "react";
import { BsFillBarChartFill } from "react-icons/bs";
import { BsFillPostcardFill } from "react-icons/bs";
import TransactionComponent from "../TransactionComponent/TransactionComponent";
import MobileTransactionComponent from "../TransactionComponent/MobileTransactionComponent";
import MobileChartContent from "../MobileChartContent/MobileChartContent";

const ToggleCapsule = () => {
  const [activeChart, setActiveChart] = useState(false);
  const [activeTransaction, setActiveTransaction] = useState(true);
  const [chartToggle, setChartToggle] = useState(false);
  const [userTransactionToggle, setUserTransactionToggle] = useState(true);

  const handleChartToggle = () => {
    setChartToggle(true);
    setUserTransactionToggle(false);
    setActiveChart(true);
    setActiveTransaction(false);
  };

  const handleTransactionToggle = () => {
    setChartToggle(false);
    setUserTransactionToggle(true);
    setActiveTransaction(true);
    setActiveChart(false);
  };
  return (
    <div>
      <div className="flex justify-center py-20">
        <div className="flex">
          <button
            className={`bg-white p-4 flex justify-center shadow-lg rounded-lg transition-all ease-in-out w-[5rem] ${
              activeChart ? "!bg-[#00C3F8]" : ""
            }`}
            onClick={handleChartToggle}
          >
            <BsFillBarChartFill
              className={`${activeChart ? "text-white" : "text-[#BDB9D4]"}`}
            />
          </button>
          <button
            className={`bg-white p-4 flex justify-center shadow-lg transition-all ease-in-out rounded-lg w-[5rem] ${
              activeTransaction ? "!bg-[#00C3F8]" : ""
            }`}
            onClick={handleTransactionToggle}
          >
            <BsFillPostcardFill
              className={`${
                activeTransaction ? "text-white" : "text-[#BDB9D4]"
              }`}
            />
          </button>
        </div>
      </div>
      {userTransactionToggle ? (
        <div className="w-full ">
          <h1 className="text-[#4022AA] text-2xl font-bold text-center">
            Total Sales
          </h1>
          <MobileTransactionComponent />
        </div>
      ) : chartToggle ? (
        <MobileChartContent />
      ) : null}
    </div>
  );
};

export default ToggleCapsule;
