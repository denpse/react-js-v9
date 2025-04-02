import React from "react";
import CardComponent from "../components/card-component";

const StateCompoent = () => {
  const prod = {
    name: "fanta",
    price: 12,
  };
  return (
    <div>
      <CardComponent name={prod.name} price={prod.price} />
    </div>
  );
};

export default StateCompoent;
