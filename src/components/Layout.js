import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="mx-4">
        <Container fluid>{children}</Container>
      </div>
      <footer />
    </div>
  );
}

export default Layout;
