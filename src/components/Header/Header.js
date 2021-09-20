import { Navbar, Nav } from "react-bootstrap";
import { ReactComponent as LogoSVG } from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <header id="header">
      <Navbar expand="lg" className="mb-2 mx-4">
        <Nav className="me-auto ">
          <NavLink exact className="nav-link" to="/">
            Dashboard
          </NavLink>
          <NavLink exact className="nav-link" to="/parametrizacao">
            Régua de Cobrança
          </NavLink>
          <NavLink exact className="nav-link" to="/envio">
            Envios por dia
          </NavLink>
          <NavLink exact className="nav-link" to="/funil">
            Funil de Acionamento
          </NavLink>
        </Nav>
        <LogoSVG />
      </Navbar>
    </header>
  );
};

export default Header;
