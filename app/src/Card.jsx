import { useState, useEffect } from "react";
import axios from "axios";

export default function Card({ selectedCategory, onAddToCart }) {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData =
    selectedCategory === "all"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {filteredData.map((item) => (
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

          <div>
            <button
              style={{ marginLeft: "100px" }}
              onClick={() => onAddToCart(item)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

//extra code
