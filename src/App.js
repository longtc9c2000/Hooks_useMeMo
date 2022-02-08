import "./styles.css";
import { useState, useMemo, useRef } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameref = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price
      }
    ]);
    setName("");
    setPrice("");

    nameref.current.focus();
  };
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("lo");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);
  return (
    <div className="App" style={{ padding: "10px 32px" }}>
      <input
        ref={nameref}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total:{total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
