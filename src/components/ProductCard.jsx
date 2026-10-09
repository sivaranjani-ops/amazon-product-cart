import { useEffect } from "react";

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity,
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  const totalAmount = quantity * price;

  return (
    <div className="product-card">
      <img
        className="product-image"
        src="https://images.unsplash.com/photo-1527814050087-3793815479db?w=300"
        alt="Wireless Mouse"
      />

      <div className="product-details">
        <h2>{productName}</h2>

        <div className="price">
          ₹{price} <small>per item</small>
        </div>

        <div className="product-info">
          Colour: {selectedColor}
          <br />
          Deliver to: {deliveryCity}
        </div>

        <div className="cart-info">
          Cart Quantity: {quantity}
          <br />
          <strong>Total Amount: ₹{totalAmount}</strong>
          <br />
          {quantity === 0
            ? "Cart is empty"
            : "Product added to cart"}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;