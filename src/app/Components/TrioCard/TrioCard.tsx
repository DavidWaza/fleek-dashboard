import React from "react";
import UpImg from "/public/assets/Group 10.svg";
import DownImg from "/public/assets/Group 11.svg";
import RedImg from "/public/assets/Group 13.svg";
import Card from "../Card/Card";

interface cardListProps {
  consumer: string;
  img: string;
  tally: string;
}

const cardList: cardListProps[] = [
  {
    img: UpImg,
    consumer: "Visitors",
    tally: "10,320",
  },
  {
    img: DownImg,
    consumer: "customers",
    tally: "4,628",
  },
  {
    img: RedImg,
    consumer: "orders",
    tally: "2,980",
  },
];
const TrioCard = () => {
  return (
    <div className="xl:p-0 px-5">
      <div className="grid grid-cols-3 gap-3 xl:gap-10">
        {cardList.map((list, index) => (
          <div key={index}>
            <Card
              consumer={list.consumer}
              img={list.img}
              tally={list.tally}
              className={
                `text-black hover:bg-[#FF392C] hover:text-white transition-all ease-in-out`
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrioCard;
