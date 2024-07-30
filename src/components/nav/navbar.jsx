import React, { useState } from "react";
import logo from "../../assets/shadepro.png";
import { Container, Nav, Ul,Li } from "./navbarStyle";
import ButtonNav from "../Button/Button";
import { Menu } from "lucide-react";

function Navbar() {
  const [nav, setNav] = useState(["Demos", "Pages", "Support", "Contect"]);

  return (
    // section 1 
    <div>

    
    <Container>
      {/* navbar  */}
      <Nav>
      <img className="logo" src={logo} alt="Logo" />
        <div>
          <Ul>
          
            {nav.map((item, index) => (
              <Li key={index}>{item}</Li>
            ))}
          </Ul>
          
        </div>
        <div>
          <ButtonNav  data={'Get started a project'} />
        </div>
        <Menu className="hamburger" />
      </Nav>
    </Container>
  
    </div>
  );
}

export default Navbar;
