"use client";
import React from "react";
import CardComponent from "../Card/CardComponent";
import { Chart } from "react-google-charts";

const LineGraph = () => {
  const data = [
    ["Year",  "Expenses"],
    ["2004", 1000],
    ["2005", 1170],
    ["2006", 660],
    ["2007", 1030],
  ];
  const options = {
    title: "Spent Time",
    curveType: "function",
    responsive:true,
  
    colors: ['red'],
    hAxis: {
      gridlines: {
        color: 'transparent'
      }
    },
    vAxis: {
      gridlines: {
        color: 'transparent'
      }
    }
  };
  return (
    <div>
      <CardComponent>
        <Chart
          chartType="LineChart"
          width="100%"
          data={data}
          options={options}
        />
      </CardComponent>
    </div>
  );
};

export default LineGraph;
