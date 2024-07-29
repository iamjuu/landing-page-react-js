import React from 'react'
import logo from '../../assets/shadepro.png'
import { Container } from './navbarStyle'
function navbar() {
  return (
    <Container>
        
      <img src={logo} alt="" />
      <ul>
      <li>Home</li>
      <li>about</li>
      <li>contact</li>
      <li>login</li>
      </ul>
      </Container>
  )
}

export default navbar
