import { Outlet, Link, useLocation } from "react-router-dom";
import { Row, Col, ListGroup } from "react-bootstrap";

export default function MyAccount() {
  const location = useLocation();

  return (
    <Row className="mt-3">
      <Col md={3}>
        <ListGroup>
          <ListGroup.Item
            as={Link}
            to="/account/profile"
            active={location.pathname.includes("profile")}
          >
            👤 Profile
          </ListGroup.Item>

          <ListGroup.Item
            as={Link}
            to="/account/orders"
            active={location.pathname.includes("orders")}
          >
            📦 Orders
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col md={9}>
        <div className="p-3 border rounded bg-light">
          <Outlet />
        </div>
      </Col>
    </Row>
  );
}