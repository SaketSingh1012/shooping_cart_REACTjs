import { useCart } from "./CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity ,differentItemsCount } = useCart();

  const totalPrice = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2 className="cart_head">Your Cart</h2>
      <h3 className="cart_head">({differentItemsCount} item)</h3>
      {cart.items.map((item, index) => (
        <div key={index} className="cart-item">
          <div className={`image-cart ${item.image}`} id="image"></div>
          <div className="item_info">{item.name}</div>
          <div className="item_info">
            ${item.price} x {item.quantity}
          </div>
          <div className="quantity-buttons">
            <button onClick={() => decrementQuantity(item)}>-</button>
            <button onClick={() => incrementQuantity(item)}>+</button>
          </div>
          <div className="remove_button">
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        </div>
      ))}
      <footer className="total-price">
        <strong>Total Price:${totalPrice.toFixed(2)}</strong>
      </footer>
    </div>
  );
};

export default Cart;
