import { useState } from "react";
import { Card, Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
export default function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }
    handleLogin();
    navigate("/");
  };
  return (
    <Row
      className="justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url("https://t3.ftcdn.net/jpg/04/29/97/36/360_F_429973653_N258TnADxIQ0HAiDq31814hWpy9vODDb.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Col md={4}>
        <Card
          className="shadow-lg border-0 p-4"
          style={{
            borderRadius: "15px",
            backgroundColor: "rgba(255,255,255,0.9)"
          }}
        >
          <Card.Body>
            <h2 className="text-center mb-4 fw-bold">Welcome</h2>
            <p className="text-center text-muted mb-4">
              Login to your account to continue shopping
            </p>

            <Form onSubmit={handleSubmit}>
              <FloatingLabel label="Email address" className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </FloatingLabel>

              <FloatingLabel label="Password" className="mb-3">
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                />
              </FloatingLabel>
              <div className="d-flex justify-content-between mb-3">
                <Form.Check type="checkbox" label="Remember me" />
                <Link to="#" className="text-decoration-none">Forgot Password?</Link>
              </div>
              <Button
                variant="warning"
                type="submit"
                className="w-100 py-2 fw-bold"
              >
                Login
              </Button>

              <p className="text-center mt-4 text-muted">
                Don't have an account? <Link to="/register" className="fw-bold text-primary text-decoration-none">Register</Link>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}