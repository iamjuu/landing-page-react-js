import React from "react";
import {Sectionmain} from '../section 2/SectionStyle'
import Card from "./Card/Card";

const Section = () => {
  return (
    <>
    <Sectionmain>
      <div className="text">

      <p>OUR SERVICES</p>
      <h2>We are providing greatr services for our <br /> customers based on needs</h2>
      </div>
      {/* card  */}
      <div className="Card">
        <Card  />
      </div>
    </Sectionmain>
    </>
  );
};

export default Section;
