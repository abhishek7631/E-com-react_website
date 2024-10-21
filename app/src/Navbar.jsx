import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">E-cart</div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}
