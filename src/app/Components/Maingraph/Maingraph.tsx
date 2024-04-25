"use client";
import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["day", "a", "b", "c", "d"],
  ["Nov", 20, 28, 38, 45],
  ["Dec", 31, 38, 55, 66],
  ["Jan", 50, 55, 77, 80],
  ["Feb", 50, 77, 66, 77],
  ["Mar", 30, 66, 22, 45],
  ["Apr", 41, 20, 32, 45],
  ["May", 50, 55, 77, 80],
  ["Jun", 15, 77, 22, 50],
];

const options = {
  responsive:true,
  hAxis: {
    gridlines: {
      color: "transparent",
    },
  },
  vAxis: {
    gridlines: {
      color: "transparent",
    },
  },
  backgroundColor: "#f9f8ff",
  candlestick: {
    fallingColor: {
      strokeWidth: 1, // Adjust the stroke width for falling candlesticks
    },
    risingColor: {
      strokeWidth: 1, // Adjust the stroke width for rising candlesticks
    },
  },
};

const Maingraph = () => {
  return (
    <div>
      <div className="py-10">
        <div className="w-full bg-[#F9F8FF] rounded-2xl h-full py-20">
          <Chart
            chartType="CandlestickChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default Maingraph;
