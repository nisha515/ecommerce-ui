
import { useState } from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "../components/Navbar";
import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer";

export default function MainLayout({ cart, wishlist, isLoggedIn, handleLogout }) {
  const [category, setCategory] = useState("All");

  return (
    <div className="d-flex flex-column min-vh-100">
      
    
      <MyNavbar
        cart={cart}
        wishlist={wishlist}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
      <CategoryBar setCategory={setCategory} />
      <div className="container mt-4 flex-grow-1">
        <Outlet context={{ category }} />
      </div>

      <Footer />
    </div>
  );
}