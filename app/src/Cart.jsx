import { useState, useEffect } from "react";
import axios from "axios"; // Ensure axios is imported

export default function Cart() {
  const [state, setState] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setState(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData(); // Call getData when the component mounts
  }, []);

  return (
    <div>
      {state.length > 0 ? (
        state.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
