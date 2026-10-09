import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  return (
    <div>
      <Header />
      <div className="tab-title">
  Tab title&nbsp;&nbsp; {`Wireless Mouse | ${selectedColor} | Cart: ${quantity}`}
</div>

      {showProduct && (
        <ProductCard
          productName={productName}
          price={price}
          quantity={quantity}
          selectedColor={selectedColor}
          deliveryCity={deliveryCity}
        />
      )}

      <div>
        <label htmlFor="color">Select Colour: </label>
        <select
          id="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
        </select>
      </div>

      <div style={{ marginTop: "12px" }}>
        <label htmlFor="city">Delivery City: </label>
        <input
          id="city"
          type="text"
          value={deliveryCity}
          onChange={(e) => setDeliveryCity(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "16px" }}>
        <button onClick={() => setQuantity((q) => q + 1)}>
          Add to Cart
        </button>

        <button
          onClick={() => setQuantity((q) => q - 1)}
          disabled={quantity === 0}
        >
          Remove One
        </button>

        <button onClick={() => setQuantity(0)}>
          Reset Cart
        </button>

        <button onClick={() => setShowProduct((s) => !s)}>
          {showProduct ? "Hide Product" : "Show Product"}
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;