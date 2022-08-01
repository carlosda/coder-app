import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget.js';

function Menu() {
  return (
    <>
      <Navbar fixed="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">e-Compras</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          </Nav>
	  
           <div className="d-flex">
		<CartWidget></CartWidget>		
	   </div>

        </Container>

      </Navbar>
    </>
  );
}

export default Menu;
