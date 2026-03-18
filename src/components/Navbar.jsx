
import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

export default function MyNavbar({ cart, wishlist, isLoggedIn, handleLogout }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        
        <Navbar.Brand as={Link} to="/" className="fw-bold">
        Shop
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={Link} to="/wishlist" className="position-relative">
              <FaHeart size={18} />
              <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
                {wishlist.length}
              </Badge>
            </Nav.Link>


            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FaShoppingCart size={18} />
              <Badge bg="success" className="position-absolute top-0 start-100 translate-middle">
                {cart.length}
              </Badge>
            </Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/account">
                  <FaUser className="me-1" />
                  My Account
                </Nav.Link>

                <Button variant="outline-light" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}