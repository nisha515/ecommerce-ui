import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";

import MyAccount from "./pages/account/MyAccount";
import Profile from "./pages/account/Profile";
import Orders from "./pages/account/Orders";


function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

 
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);


  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      return exists ? prev : [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id));
  };


  const placeOrder = () => {
    if (cart.length === 0) return;

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0),
      date: new Date().toLocaleDateString(),
      status: "Placed",
    };

    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
  };


  const cancelOrder = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? { ...order, status: "Cancelled" }
          : order
      )
    );
  };


  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              cart={cart}
              wishlist={wishlist}
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
            />
          }
        >
          <Route
            index
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="shop"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Shop addToCart={addToCart} addToWishlist={addToWishlist} />
              </ProtectedRoute>
            }
          />

          <Route
            path="product/:id"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ProductDetail />
              </ProtectedRoute>
            }
          />

          <Route
            path="cart"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Cart cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />

          <Route
            path="wishlist"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Wishlist
                  wishlist={wishlist}
                  removeFromWishlist={removeFromWishlist}
                  addToCart={addToCart}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="checkout"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Checkout cart={cart} placeOrder={placeOrder} />
              </ProtectedRoute>
            }
          />

     
          <Route
            path="account"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <MyAccount />
              </ProtectedRoute>
            }
          >
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />

      
            <Route
              path="orders"
              element={
                <Orders
                  orders={orders}
                  cancelOrder={cancelOrder}
                />
              }
            />
          </Route>
        </Route>


        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login handleLogin={handleLogin} />} />
          <Route path="register" element={<Register handleLogin={handleLogin} />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;