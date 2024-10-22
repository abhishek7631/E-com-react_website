import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <div>
      <Navbar></Navbar>
      <Home setSelectedCategory={setSelectedCategory}></Home>
      <Cart selectedCategory={selectedCategory}></Cart>
    </div>
  );
}

export default App;
