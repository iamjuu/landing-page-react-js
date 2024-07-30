
import React, { useState } from "react";
import logo from "../../assets/shadepro.png";
import { Container, Nav, Ul, Li } from "./navbarStyle";
import ButtonNav from "../Button/Button";
import { Menu } from "lucide-react";

function Navbar() {
  const [nav, setNav] = useState(["Demos", "Pages", "Support", "Contact"]);
  const [isNavVisible, setIsNavVisible] = useState(false); // State to manage nav visibility

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible); // Toggle the visibility state
  };

  return (
    <div>
      <Container>
        <Nav>
          <img className="logo" src={logo} alt="Logo" />
          <div>
            <Ul isVisible={isNavVisible}>
              {nav.map((item, index) => (
                <Li key={index}>{item}</Li>
              ))}
            </Ul>
          </div>
          <div>
            <ButtonNav data={'Get started a project'} />
          </div>
          <Menu className="hamburger" onClick={toggleNavVisibility} />
        </Nav>
      </Container>
    </div>
  );
}

export default Navbar;