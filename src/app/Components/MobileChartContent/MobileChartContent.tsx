import React from "react";
import TrioCard from "../TrioCard/TrioCard";
import Maingraph from "../Maingraph/Maingraph";
import LineGraph from "../LineGraph/LineGraph";
import UserCard from "../UserCard/UserCard";

const MobileChartContent = () => {
  return (
    <div>
      <TrioCard />
      <Maingraph />
      <div className="grid grid-cols-1 gap-8 px-5 pb-10">
        <LineGraph />
        <UserCard />
      </div>
    </div>
  );
};

export default MobileChartContent;
