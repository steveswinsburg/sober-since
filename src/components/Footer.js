import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import MessedUp from "./MessedUp";
import InstallPwa from "./InstallPwa";

const Footer = () => {
  const location = useLocation();
  const onHome = location.pathname === "/";

  if (!onHome) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "white", // clean solid background
      }}
    >
      <Container className="d-flex justify-content-between align-items-center py-2">
        <MessedUp />
        <InstallPwa />
      </Container>
    </div>
  );
};

export default Footer;
