import Navbar from "./Navbar";
import Home from "./Home";
import Card from "./Card";
import CartPage from "./CartPage"; // Import CartPage
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]); // State to store cart items
  const [currentPage, setCurrentPage] = useState("home"); // State to handle navigation

  // Function to handle adding an item to the cart
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar
        cartCount={cart.length}
        onCartClick={() => handlePageChange("cart")}
        onHomeClick={() => handlePageChange("home")}
      />
      {currentPage === "cart" ? (
        <CartPage cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      ) : (
        <>
          <Home setSelectedCategory={setSelectedCategory} />
          <Card
            selectedCategory={selectedCategory}
            onAddToCart={handleAddToCart}
          />
        </>
      )}
    </div>
  );
}

export default App;
