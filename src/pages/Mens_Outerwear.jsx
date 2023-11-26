import AddToCartButton from "./AddToCartButton";
import "./Mens_Outerwear.css";

const productData = [
  { name: "Men's Tech Shell Full-Zip", price: 50.2 },
  { name: "Anvil L/S Crew Neck - Grey", price: 22.15 },
  { name: "Green Flex Fleece Zip Hoodie", price: 45.65 },
  { name: "Android Nylon Packable Jacket", price: 33.6 },
  { name: "YouTube Ultimate Hooded Sweatshirt", price: 32.35 },
  { name: "Grey Heather Fleece Zip Hoodie", price: 38.85 },
  { name: "Vastrm Hoodie", price: 200.0 },
  { name: "Recycled Plastic Bottle Hoodie - Green", price: 60.95 },
  { name: "Rowan Pullover Hood", price: 60.85 },
  { name: "Men's Voyage Fleece Jacket", price: 48.0 },
  { name: "Eco-Jersey Chrome Zip Up Hoodie", price: 37.75 },
  { name: "Android Colorblock Hooded Pullover", price: 50.2 },
  { name: "Tri-blend Full-Zip Hoodie", price: 52.2 },
  { name: "Fleece Full-Zip Hoodie", price: 45.65 },
  { name: "Jacquard-Knit Full-Zip Fleece", price: 74.9 },
  { name: "YouTube Unisex Flex Fleece Zip Hoodie", price: 45.25 },
];

const Mens_Outerwear = () => {
  return (
    <>
      <div className="outwear">
        <div className="mens_outwear_img img_common"></div>
        <div className="">Men&apos;s Outerwear</div>
        <div>({productData.length} items)</div>
      </div>
      <div className="mens_footwear_images">
        {productData.map((product, index) => (
          <div className="mens_outwear_data1" key={index}>
            <div className={`mens_outwear_img${index + 1}`} id={`image`}></div>
            <div>{product.name}</div>
            <div>${product.price}</div>
            <div>
              <AddToCartButton
                itemImage={`mens_outwear_img${index + 1}`}
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

export default Mens_Outerwear;
