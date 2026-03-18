import { products } from "../data/products";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <Row>
      {products.map((p) => (
        <Col md={3} key={p.id}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>₹{p.price}</Card.Text>
              <Button as={Link} to={`/product/${p.id}`}>View</Button>
              <Button className="ms-2">Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}