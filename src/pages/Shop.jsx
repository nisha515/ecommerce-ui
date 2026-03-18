import { Row, Col, Card, Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Nike Court Vision Low Women's Shoes",
    price: 7565,
    category: "Shoes",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSp4mgXfzB8bjLUXN649Lx-TGkx8pUj5RNW6LtmCC0PyFpa66pxzdw-1hz7eCSZNDgMF43GH0K7xbPyBsiEw853M9xJUQiJw7CuKDL-WatRYmVEgnFrTAlmIA"
  },
  {
    id: 2,
    name: "iPhone 17 Pro",
    price: 134900,
    category: "Mobiles",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRYVPIlnqTKEwrUFhROpKPVv_OIOt8akjNJgieRDnIO0Mw5SkBc0Lbm6GQ8Tii-pWZcXSRSGlw5Sbozn0kxjfHlILeSsvDbYuYs9nu_bf7AedtgiPQK6yuENR3j"
  },
  {
    id: 3,
    name: "Neopticon BrowseBook",
    price: 50000,
    category: "Electronics",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSPQWy1o_llXJnYCnpdOYLu5Bu0Z90tZ5BhjFHgaMTcsLBzOq1bVH6mW2BMkDWNYPZAfd3sco7UjmLDEtBM8d8jBYnJcBSHTzZIBSnIZWprX2fbZeOpuayUirY"
  },
  {
    id: 4,
    name: "T-Shirt",
    price: 1200,
    category: "Clothing",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQNzTSuD__VoSl09vleBIqG_RlgV5lappSw7FzG7YHj08O5zOwaCxxYbzbPMXhO01D_x7cf5ck9exiHC0QPy97Q43C5PldpLoOs_2AJpJ1Gi1J2VD8L3UfXzg"
  }
];

export default function Shop({ addToCart, addToWishlist }) {
  const { category = "All" } = useOutletContext() || {};

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center fw-bold">
        {category} Products
      </h3>

      <Row className="g-4">
        {filteredProducts.map((item) => (
          <Col lg={3} md={4} sm={6} xs={12} key={item.id}>
            <Card className="shadow-sm h-100">

              <Card.Img
                variant="top"
                src={item.image}
                style={{
                  height: "200px",
                  objectFit: "contain"
                }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: "14px" }}>
                  {item.name}
                </Card.Title>

                <Card.Text className="fw-bold">
                  ₹{item.price}
                </Card.Text>

                <div className="mt-auto d-flex gap-2">
                  <Button
                    size="sm"
                    className="w-50"
                    onClick={() => addToCart(item)}
                  >
                    Cart
                  </Button>

                  <Button
                    size="sm"
                    variant="outline-danger"
                    className="w-50"
                    onClick={() => addToWishlist(item)}
                  >
                    Wishlist
                  </Button>
                </div>
              </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}