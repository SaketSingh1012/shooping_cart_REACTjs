import AddToCartButton from "./AddToCartButton";
import "./Ladies_Outwear.css";

const productData = [
  { name: "Ladies Modern Stretch Full Zip", price: 41.6 },
  { name: "Ladies Colorblock Wind Jacket", price: 45.9 },
  { name: "Ladies Voyage Fleece Jacket", price: 48.0 },
  { name: "Ladies Pullover L/S Hood", price: 36.5 },
  { name: "Ladies Sonoma Hybrid Knit Jacket", price: 84.85 },
  { name: "Ladies Yerba Knit Quarter Zip", price: 64.2 },
];

const Ladies_Outwear = () => {
  return (
    <>
      <div className="outwear">
        <div className="ladies_outwear_img img_common"></div>
        <div className="">Ladies Outerwear</div>
        <div>({productData.length} items)</div>
      </div>
      <div className="mens_footwear_images">
        {productData.map((product, index) => (
          <div className="mens_outwear_data1" key={index}>
            <div
              className={`ladies_outwear_img${index + 1}`}
              id={`image`}
            ></div>
            <div>{product.name}</div>
            <div>${product.price}</div>
            <div>
              <AddToCartButton
                itemImage={`ladies_outwear_img${index + 1}`}
                itemName={product.name}
                itemPrice={product.price}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ladies_Outwear;
