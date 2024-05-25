import logo from '../images/logooo.png';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navigation0">
        <div className="logo">
          <img className="logomen" src={logo} />
        </div>
        <Container className="navigation">
          <Nav className="navigationTengah">
            <Nav.Link>Makanan Sehat</Nav.Link>
            <Nav.Link>Latihan Fisik</Nav.Link>
            <Nav.Link>Komunitas</Nav.Link>
          </Nav>
          <Nav className="login">
            <Nav.Link>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
