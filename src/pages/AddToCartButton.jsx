import PropTypes from "prop-types";
import { useCart } from "./useCart";

const AddToCartButton = ({ itemImage, itemName, itemPrice }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      image: itemImage,
      name: itemName,
      price: itemPrice,
    });
  };

  return <button onClick={handleAddToCart}>ADD TO CART</button>;
};

AddToCartButton.propTypes = {
  itemImage: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
};

export default AddToCartButton;
