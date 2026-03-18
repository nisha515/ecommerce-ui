import { Card, Button, Row, Col } from "react-bootstrap";

export default function Profile() {
  return (
    <Card className="p-3">
      <h4 className="mb-4">My Profile</h4>

      <Row className="align-items-start">
        <Col md={3} className="text-center">
          <img
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
            alt="profile"
            className="rounded-circle img-fluid"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
        </Col>
        <Col md={9}>
          <p><strong>Name:</strong> Nisha Mehta</p>
          <p><strong>Email:</strong> nishamehta@example.com</p>
          <p><strong>Phone:</strong> +91 9876543000</p>

          <h5 className="mt-3">Address</h5>
          <p>123, Uttarakhand, India</p>

          <Button variant="primary" size="sm">
            Edit Profile
          </Button>
        </Col>

      </Row>
    </Card>
  );
}