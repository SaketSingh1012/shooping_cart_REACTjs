import "./App.css";
import Homepage from "./pages/Homepage";
import { CartProvider } from "./pages/CartContext";

function App() {
  return (
    <CartProvider>
      <Homepage />
    </CartProvider>
  );
}

export default App;
