import React from "react";
import { Cards } from "../Card/CardStyle";
import B1 from "../../../assets/section img/B1.png";
import B2 from "../../../assets/section img/B2.jpeg";
import B3 from "../../../assets/section img/B3.png";



const Card = () => {
  const data = [
    {
      image: B1,
      title: "Graphic Designer",
      para: "Lorem ipsum jsndjsdjas dsfh sdfegh weterihgsf wehwweiehewh etrhwheewoisfjsnfifh w hf eofdgjl ertuoiuer eru ter reirutht h w8uruhweet wwuhweetu uhwt",
      psub: "Get it now",
      backgroundColor: "#ecad66"
    },
    {
      image: B2,
      title: "Digital",
      para: "Lorem ipsum jLorem ipsum jsndjsdjas dsfh sdfegh weterihgsf wehwweiehewh etrhwheewoisfjsnfifh w hf eofdgjl ertuoiuer eru ter reirutht h w8uruhweet wwuhweetu uhwt sndjsdjas",
      psub: "Get it now",
      backgroundColor: "#0a6aa4"
    },
    {
      image: B3,
      title: "Software",
      para: "Lorem ipsum Lorem ipsum jsndjsdjas dsfh sdfegh weterihgsf wehwweiehewh etrhwheewoisfjsnfifh w hf eofdgjl ertuoiuer eru ter reirutht h w8uruhweet wwuhweetu uhwt dfsdfjsndjsdjas",
      psub: "Get it now",
      backgroundColor: "#85a9c3"
    }
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
          <button>{item.psub}</button>
        </Cards>
      ))}
    </>
  );
};

export default Card;
