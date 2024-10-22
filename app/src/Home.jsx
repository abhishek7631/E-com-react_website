import "./Home.css";

export default function Home({ setSelectedCategory }) {
  return (
    <div>
      <div className="topBtns">
        <button className="btnTop" onClick={() => setSelectedCategory("all")}>
          All
        </button>
        <button
          className="btnTop"
          onClick={() => setSelectedCategory("men's clothing")}
        >
          Men
        </button>
        <button
          className="btnTop"
          onClick={() => setSelectedCategory("women's clothing")}
        >
          Women
        </button>
        <button
          className="btnTop"
          onClick={() => setSelectedCategory("electronics")}
        >
          Electronics
        </button>
        <button
          className="btnTop"
          onClick={() => setSelectedCategory("jewelery")}
        >
          Jewelry
        </button>
      </div>
    </div>
  );
}
