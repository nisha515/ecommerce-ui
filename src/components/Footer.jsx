// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-dark text-white mt-5 pt-4 pb-2">
//       <Container>
//         <Row className="text-start">
//           <Col md={4} className="mb-4">
//             <h4 className="fw-bold">Shop</h4>
//             <p style={{ fontSize: "14px" }}>
//               Your one-stop destination for all your shopping needs.
//               Discover the best deals and latest trends.
//             </p>
//           </Col>
//           <Col md={4} className="mb-4">
//             <h5 className="fw-semibold">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <Link to="/account/orders" className="text-white text-decoration-none">
//                   Orders
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/account" className="text-white text-decoration-none">
//                   My Account
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/cart" className="text-white text-decoration-none">
//                   Cart 
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/wishlist" className="text-white text-decoration-none">
//                   Wishlist
//                 </Link>
//               </li>
//             </ul>
//           </Col>

//           <Col md={4} className="mb-4">
//             <h5 className="fw-semibold">Contact</h5>
//             <p style={{ fontSize: "14px", marginBottom: "5px" }}>
//             support@shop.com
//             </p>
//             <p style={{ fontSize: "14px", marginBottom: "5px" }}>
//             +91 94843 85744
//             </p>
//             <p style={{ fontSize: "14px" }}>
//               India
//             </p>
//           </Col>

//         </Row>

//         <hr className="border-light" />
//         <div className="text-center" style={{ fontSize: "14px" }}>
//           © {new Date().getFullYear()} Shop. All Rights Reserved.
//         </div>
//       </Container>
//     </footer>
//   );
// }

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-5 pb-3">
      <Container>
        <Row>

          {/* Brand */}
          <Col md={4} className="mb-4">
            <h4 className="fw-bold mb-3">🛍 Shop</h4>
            <p className="text-light" style={{ fontSize: "14px" }}>
              Your one-stop destination for all your shopping needs.
              Discover the best deals and latest trends.
            </p>
          </Col>

          {/* Links */}
          <Col md={4} className="mb-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to="/account/orders" className="footer-link">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/account" className="footer-link">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/cart" className="footer-link">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="footer-link">
                  Wishlist
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4} className="mb-4">
            <h5 className="fw-semibold mb-3">Contact</h5>
            <p className="mb-1" style={{ fontSize: "14px" }}>
              📧 support@shop.com
            </p>
            <p className="mb-1" style={{ fontSize: "14px" }}>
              📞 +91 94843 85744
            </p>
            <p style={{ fontSize: "14px" }}>
              🇮🇳 India
            </p>
          </Col>

        </Row>

        <hr className="border-secondary" />

        <div className="text-center text-light" style={{ fontSize: "13px" }}>
          © {new Date().getFullYear()} Shop. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
} 