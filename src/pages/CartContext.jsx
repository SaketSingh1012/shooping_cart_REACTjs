import { createContext, useReducer, useCallback, useContext } from "react";
import PropTypes from "prop-types";

const initialCartState = {
  items: [],
};

const CartContext = createContext();

const cartReducer = (state, action) => {
  let existingItem;

  switch (action.type) {
    case "ADD_TO_CART":
      existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.name === action.payload.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.name !== action.payload.name),
      };
    default:
      return state;
  }
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = useCallback((item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  }, []);

  const removeFromCart = useCallback((item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  }, []);

  const value = { cart: cartState, addToCart, removeFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useCart, CartContext };
