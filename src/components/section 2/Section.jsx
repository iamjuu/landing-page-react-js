import React from "react";
import { Sectionpara } from "../section/sectionStyle";
import { SectionBody } from "../section 2/SectionStyle";
import Card from "./Card/Card";
import B1 from "../../assets/section img/B1.png";
import B2 from "../../assets/section img/B2.jpeg";
import B3 from "../../assets/section img/B3.png";
const Section = () => {
  return (
    <>
      <SectionBody>
        <Sectionpara> OUR SERVICES</Sectionpara>

        <h2>
          We provide greate services for our <br /> customers based on needs
        </h2>
      </SectionBody>
      <Card
        h4={"Graphics"}
        para={
          " Lorem ipsum dolor sit amet consectetur, excepturi! Corporis consectetur deserunt "
        }
        img={B1}
      />
    </>
  );
};

export default Section;
