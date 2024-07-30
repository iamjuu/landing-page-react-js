import React from "react";
import { Sectionmain } from "../section 2/SectionStyle";
import Card from "./Card/Card";
import Bg1 from "../../assets/section img/WhatsApp_Image_2023-10-09_at_13.36.40_003bd9e0-removebg-preview-removebg-preview.png";

const Section = () => {
  return (
    <>
      <Sectionmain>
        <div className="text">
          <p>OUR SERVICES</p>
          <h2>
            We are providing greatr services for our <br /> customers based on
            needs
          </h2>
        </div>
        {/* card  */}
        <div className="Card">
          <Card />
        </div>

        <div className="picmain">
          {/* img  */}
          <div className="pic"> </div>

          {/* review  */}
          <div  className="review">
            <p> ⭐⭐⭐⭐⭐</p>
            <p>
            "OMG! I cannot believe that  i have got  a  brend new landing page after getting Albino. It was super  easy to edit and publish"
            </p>
            <p  className="dev">muhammed ajmal Web developer</p>
          </div>
        </div>
      </Sectionmain>
    </>
  );
};

export default Section;
