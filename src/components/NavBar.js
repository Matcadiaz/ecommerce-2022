import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Galactus Gamer
          
          </Navbar.Brand>
            
            
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/category/microprocesadores'>microprocesadores</Nav.Link>
            <Nav.Link as={Link} to='/category/memorias'>memorias</Nav.Link>
            <Nav.Link as={Link} to='/category/pc de oficina'>Pc de Oficina</Nav.Link>
            <Nav.Link as={Link} to='/category/placa de video'>Placas de video</Nav.Link>
            <Nav.Link as={Link} to='/category/contactos'>Contactos</Nav.Link>
          </Nav>
          <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;






