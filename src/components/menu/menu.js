import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">e-Compras</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
  );
}

export default Menu;