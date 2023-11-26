import AddToCartButton from "./AddToCartButton";
import "./Ladies_T_Shirt.css";

const productData = [
  { name: "Ladies Chrome T-Shirt", price: 13.3 },
  { name: "Ladies Google New York T-Shirt", price: 18.35 },
  { name: "Ladies Gmail T-Shirt", price: 16.4 },
  { name: "Ladies G Logo White T-Shirt", price: 13.3 },
  { name: "Ladies Android Pride T-Shirt", price: 19.1 },
  { name: "Ladies Ringspun Crew Neck", price: 19.7 },
  { name: "Ladies Tri-Blend V-Neck T-Shirt", price: 35.1 },
  { name: "Bella Ladies Favorite Tee", price: 10.5 },
  { name: "Ladies Bamboo T-Shirt", price: 20.65 },
  { name: "L/S Colorblock Raglan", price: 36.95 },
  { name: "Bella Scoop-Neck Ladies T-Shirt", price: 13.1 },
  { name: "Ladies Not For Sale T-Shirt", price: 24.0 },
  { name: "Ladies Android L/S Stretch T-Shirt", price: 20.0 },
  { name: "Ladies Mountain View T-Shirt", price: 17.5 },
  { name: "Ladies Blueprint for a Better Inbox T-Shirt", price: 14.3 },
  { name: "Cotton Poly w/ Thermal Tee", price: 15.15 },
  { name: "Ladies YouTube Favorite Tee", price: 11.1 },
  { name: "MTV Ladies Yellow T-Shirt", price: 16.9 },
  { name: "Women's Android Heart T-Shirt", price: 10.6 },
];

const Ladies_T_Shirt = () => {
  return (
    <>
      <div className="outwear">
        <div className="ladies_t-shirt_img img_common"></div>
        <div>Ladies T-Shirts</div>
        <div>({productData.length} items)</div>
      </div>
      <div className="mens_footwear_images">
        {productData.map((product, index) => (
          <div className="mens_outwear_data1" key={index}>
            <div
              className={`ladies_t_shirt_img${index + 1}`}
              id={`image`}
            ></div>
            <div>{product.name}</div>
            <div>${product.price}</div>
            <div>
              <AddToCartButton
                itemImage={`ladies_t_shirt_img${index + 1}`}
                itemName={product.name}
                itemPrice={product.price}
              />{" "}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ladies_T_Shirt;
