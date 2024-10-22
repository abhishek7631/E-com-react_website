import "./Navbar.css";

export default function Navbar({ cartCount, onCartClick, onHomeClick }) {
  return (
    <nav>
      <div className="logo">E-cart</div>
      <div className="menu">
        <ul>
          <li onClick={onHomeClick} style={{ cursor: "pointer" }}>
            Home
          </li>
          <li onClick={onCartClick} style={{ cursor: "pointer" }}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span style={{ marginLeft: "5px" }}>{cartCount}</span>{" "}
            {/* Cart Count */}
          </li>
        </ul>
      </div>
    </nav>
  );
}
