import React from "react";

interface CardComponentProps {
  children: React.ReactNode;
}
const CardComponent = ({ children }: CardComponentProps) => {
  return <div className="w-full shadow-xl bg-white p-10 rounded-2xl">{children}</div>;
};

export default CardComponent;
