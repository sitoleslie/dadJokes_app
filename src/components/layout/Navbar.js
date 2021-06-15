import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Dad Jokes</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
    </div>
  )
}

export default NavBar; 