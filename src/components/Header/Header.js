import { Navbar, Container, Nav } from "react-bootstrap";
import { ReactComponent as LogoSVG } from "../../assets/img/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <header id="header">
      <Navbar expand="lg" variant="dark" className="mb-2">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Nav className="me-auto">
            <NavLink exact className="nav-link" to="/">
              Dashboard
            </NavLink>
            <NavLink exact to="/parametrizacao">
              Régua de Cobrança
            </NavLink>
            <NavLink exact to="/envio">
              Envios por dia
            </NavLink>
          </Nav>
          <LogoSVG />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
