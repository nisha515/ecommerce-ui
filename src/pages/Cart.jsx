// import { Table, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// export default function Cart({ cart, setCart }) {

//   const navigate = useNavigate();
//   const removeItem = (index) => {
//     const updatedCart = cart.filter((_, i) => i !== index);
//     setCart(updatedCart);
//   };
//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="container mt-4">
//       <h3 className="mb-4">Shopping Cart</h3>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           <Table bordered hover responsive>

//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {cart.map((item, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{item.name}</td>
//                   <td>₹{item.price}</td>
//                   <td>
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => removeItem(index)}
//                     >
//                       Remove
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//           <h5 className="text-end">Total: ₹{total}</h5>

//           <div className="text-end">
//             <Button
//               variant="success"
//               onClick={() => navigate("/checkout")}
//             >
//               Proceed to Checkout
//             </Button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

import { Table, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">
      <Card className="p-3 shadow-sm">
        <h3 className="mb-4">🛒 Shopping Cart</h3>

        {cart.length === 0 ? (
          <div className="text-center py-5">
            <h5>Your cart is empty 😔</h5>
            <Button
              variant="primary"
              className="mt-3"
              onClick={() => navigate("/shop")}
            >
              Go to Shop
            </Button>
          </div>
        ) : (
          <>
            <Table bordered hover responsive className="align-middle">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td className="text-center">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeItem(index)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Total + Checkout */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <h5 className="mb-0">Total: ₹{total}</h5>

              <Button
                variant="success"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout →
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}