import { Table, Card, Badge, Button } from "react-bootstrap";

export default function Orders({ orders, cancelOrder }) {
  return (
    <div className="container mt-3">
      <Card className="p-3 shadow-sm">
        <h4 className="mb-3">📦 My Orders</h4>

        {orders.length === 0 ? (
          <div className="text-center py-4">
            <p>No orders placed yet 😔</p>
          </div>
        ) : (
          <Table bordered hover responsive className="align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td>#{order.id}</td>
                  <td>{order.date}</td>

                  <td>
                    <Badge
                      bg={
                        order.status === "Cancelled"
                          ? "danger"
                          : "success"
                      }
                    >
                      {order.status}
                    </Badge>
                  </td>

                  <td>₹{order.total}</td>

                  <td>
                    {order.status !== "Cancelled" && (
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => cancelOrder(order.id)}
                      >
                        Cancel
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>
    </div>
  );
}