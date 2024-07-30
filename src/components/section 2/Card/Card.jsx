import React from "react";
import { Cards, CardImage } from "../Card/CardStyle";
import B1 from "../../../assets/section img/B1.png";
import B2 from "../../../assets/section img/B2.jpeg";
import B3 from "../../../assets/section img/B3.png";

const Card = () => {
  const data = [
    {
      image: B1,
      title: "Graphic Designer",
      para: "Lorem ipsum jsndjsdjas",
      psub: "Get it now"
    },
    {
      image: B2,
      title: "Digital",
      para: "Lorem ipsum jsndjsdjas",
      psub: "Get it now"
    },
    {
      image: B3,
      title: "Software",
      para: "Lorem ipsum jsndjsdjas",
      psub: "Get it now"
    }
  ];

  return (
    <>
      {data.map((item, index) => (
        <Cards key={index}>
          <CardImage src={item.image} alt="img" />
          <div>
            <h4>{item.title}</h4>
            <p>{item.para}</p>
          </div>
          <button>{item.psub}</button>
        </Cards>
      ))}
    </>
  );
};

export default Card;
