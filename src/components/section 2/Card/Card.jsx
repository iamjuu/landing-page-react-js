import React from "react";
import { Cards } from "../Card/CardStyle";
const Card = ({h4 ,para,B1}) => {
  return (
    <Cards>
      <div>
        <img src={B1} alt="img" />
      </div>
      <div>

        <h4>{h4}</h4>
        <p>
      {para}
        </p>
      </div>
        <button> </button>
    </Cards>
  );
};

export default Card;
