import { useCart } from "./CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.items.map((item, index) => (
        <div key={index} className="cart-item">
          <div className={`image-cart ${item.image}`} id="image"></div>
          <div className="item_info">{item.name}</div>
          <div className="item_info">
            ${item.price} x {item.quantity}
          </div>
          <div className="remove_button">
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        </div>
      ))}
      <footer className="total-price">
        <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
      </footer>
    </div>
  );
};

export default Cart;
