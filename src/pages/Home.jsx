import React from "react";
import Navbar from "../components/nav/navbar";
import Section from "../components/section/Section";
import Section2 from "../components/section 2/Section";
import { Container, Sections } from "./HomeStyle";

const Home = () => {
  return (
    <Container>
      <Navbar />
      {/* sections  */}
      <Sections>
        <Section />
        <Section2 />
      </Sections>
    </Container>
  );
};

export default Home;
