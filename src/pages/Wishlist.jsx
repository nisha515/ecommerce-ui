import { Row, Col, Card, Button } from "react-bootstrap";
export default function Wishlist({ wishlist, removeFromWishlist, addToCart }) {
  return (
    <div className="container mt-4">
      <h3 className="mb-4">My Wishlist</h3>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <Row>
          {wishlist.map((item) => (
            <Col lg={3} md={4} sm={6} xs={12} key={item.id} className="d-flex">
              <Card className="mb-4 shadow-sm w-100 h-100">
                <Card.Img
                  variant="top"
                  src={item.image || item.img}
                  style={{
                    height: "220px",
                    objectFit: "cover"
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title
                    style={{
                      fontSize: "14px",
                      minHeight: "40px"
                    }}
                  >
                    {item.name}
                  </Card.Title>
                  <Card.Text className="fw-bold mb-2">
                    ₹{item.price}
                  </Card.Text>
                  <div className="mt-auto d-flex gap-2">
                    <Button
                      size="sm"
                      variant="primary"
                      className="w-50"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </Button>

                    <Button
                      size="sm"
                      variant="danger"
                      className="w-50"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </Button>

                  </div>

                </Card.Body>

              </Card>

            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}