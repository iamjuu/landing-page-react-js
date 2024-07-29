import React, { useState } from "react";
import logo from "../../assets/shadepro.png";
import { Container, Nav, Ul,Li } from "./navbarStyle";
import ButtonNav from "../Button/Button";

function Navbar() {
  const [nav, setNav] = useState(["Demos", "Pages", "Support", "Contect"]);

  return (
    // section 1 
    <div>

    
    <Container>
      {/* navbar  */}
      <Nav>
        <div>
          <Ul>
            <img src={logo} alt="Logo" />
            {nav.map((item, index) => (
              <Li key={index}>{item}</Li>
            ))}
          </Ul>
        </div>
        <div>
          <ButtonNav  data={'Get started a project'} />
        </div>
      </Nav>
    </Container>
  
    </div>
  );
}

export default Navbar;
