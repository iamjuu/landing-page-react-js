import React from "react";
import { Cards } from "../Card/CardStyle";
import B1 from "../../../assets/section img/B1.png";
import B2 from "../../../assets/section img/B2.jpeg";
import B3 from "../../../assets/section img/B3.png";
import { FaArrowRight } from "react-icons/fa";

const Card = () => {
  const data = [
    {
      image: B1,
      title: "Graphic Designer",
      para: "White lots of unique blocks, you can easly build a page without coding. Build your next landing  page.",
      btn: "Learn more",
      backgroundColor: "#49be25",
    },
    {
      image: B2,
      title: "Digital",
      para: "White lots of unique blocks, you can easly build a page without coding. Build your next landing  page.",
      btn: "Learn more",
      backgroundColor: "#0a6aa4",
    },
    {
      image: B3,
      title: "Software",
      para: "White lots of unique blocks, you can easly build a page without coding. Build your next landing  page.",
      btn: "Learn more",
      backgroundColor: "#be4d25",
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <Cards key={index} $backgroundColor={item.backgroundColor}>
          <img src={item.image} alt="img" />
          <div className="cardtext">
            <h5>{item.title}</h5>
            <p className="para">{item.para}</p>
          </div>
          <div  className="spanbtn">

          
          <span>{item.btn}</span>
          <span>
            <FaArrowRight />
          </span>
          </div>
        </Cards>
      ))}
    </>
  );
};

export default Card;
