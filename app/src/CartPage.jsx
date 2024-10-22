export default function CartPage({ cart, onRemoveFromCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                marginBottom: "20px",
                border: "2px solid black",
                width: "250px",
                padding: "10px",
                borderRadius: "20px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "150px", height: "200px" }}
              />
              <hr />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => onRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
