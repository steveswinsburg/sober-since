import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Header({ title, children }) {
  return (
    <Navbar className="justify-content-between">
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    </Navbar>
  );
}

export default Header;