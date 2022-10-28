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
          Galactus Gaming
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/category/microprocesadores'>Microprocesadores</Nav.Link>
          <Nav.Link as={Link} to='/category/memorias'>Memorias</Nav.Link>
          <Nav.Link as={Link} to='/category/placa de video'>Placas de video</Nav.Link>
          <Nav.Link as={Link} to='/CartWidget'></Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;






