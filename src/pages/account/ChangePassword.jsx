// import { Outlet, Link } from "react-router-dom";

// export default function MyAccount() {
//   return (
//     <div>
//       <h2>My Account</h2>
//       <Link to="profile">Profile</Link> | 
//       <Link to="orders">Orders</Link> | 
//       <Link to="change-password">Change Password</Link>
//       <Outlet />
//     </div>
//   );
// }

import { Form, Button } from "react-bootstrap";

export default function ChangePassword() {
  return (
    <>
      <h4 className="mb-4">Change Password</h4>

      <Form>

        <Form.Group className="mb-3">
          <Form.Label>Current Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button variant="primary">Update Password</Button>

      </Form>
    </>
  );
}