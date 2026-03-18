import { Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ cart, placeOrder }) {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!formData.name.trim()) {
      alert("Please fill Full Name");
      return;
    }
    if (!formData.address.trim()) {
      alert("Please fill Address");
      return;
    }
    if (!formData.city.trim()) {
      alert("Please fill City");
      return;
    }
    if (!formData.pincode.trim()) {
      alert("Please fill Pincode");
      return;
    }
    if (!formData.phone.trim()) {
      alert("Please fill Phone number");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // ✅ SAVE ORDER
    placeOrder();

    alert("Order Placed Successfully!");

    // ✅ REDIRECT TO ORDERS PAGE
    navigate("/account/orders");
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Checkout</h3>

      <Row>
        {/* FORM */}
        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <h5 className="mb-3">Shipping Details</h5>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                />
              </Form.Group>

              <Button
                variant="success"
                className="w-100 mt-2"
                onClick={handleOrder}
              >
                Place Order
              </Button>
            </Form>
          </Card>
        </Col>

        {/* SUMMARY */}
        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <h5 className="mb-3">Order Summary</h5>

            {cart.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              <>
                <Table bordered size="sm">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>₹{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                <h5 className="text-end">Total: ₹{total}</h5>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}