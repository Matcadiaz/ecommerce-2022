import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const NavBar = () => {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Galactus Gamer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#ArmaTuPc">Arma tu PC</Nav.Link>
            <Nav.Link href="#PcGamer">Pc Gamer</Nav.Link>
            <Nav.Link href="#PcOficina">Pc de Oficina</Nav.Link>
            <Nav.Link href="#PlacasDeVideo">Placas de video</Nav.Link>
            <Nav.Link href="#SillasGamer">Contactos</Nav.Link>
          </Nav>
          <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;






