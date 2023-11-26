import AddToCartButton from "./AddToCartButton";
import "./Mens_T_Shirt.css";

const productData = [
  { name: "YouTube Organic Cotton T-Shirt - Grey", price: 14.75 },
  { name: "Inbox - Subtle Actions T-Shirt", price: 17.05 },
  { name: "Adult Android Superhero T-Shirt", price: 14.95 },
  { name: "Men's Vintage Heather T-Shirt", price: 15.8 },
  { name: "Basic Black T-Shirt", price: 16.9 },
  { name: "Local Guides T-Shirt", price: 15.7 },
  { name: "Go Gopher T-Shirt in Teal", price: 10.95 },
  { name: "Android Ringspun T-Shirt - Green", price: 8.75 },
  { name: "Organic Cotton Android walking with dog T-shirt", price: 17.25 },
  { name: "Organic Cotton T-Shirt - Red", price: 14.4 },
  { name: "Unisex Gmail T-Shirt", price: 15.0 },
  { name: "Android Soccer T-Shirt", price: 15.2 },
  { name: "Basic Google T-Shirt", price: 13.3 },
  { name: "Tri-Blend V-Neck Tee", price: 14.95 },
  { name: "Heather Pocket Tee - Light Blue", price: 23.3 },
  { name: "Google Now Skyline T-Shirt", price: 20.2 },
  { name: "Tri-Blend G Logo Men's Polo", price: 32.7 },
  { name: "Tri-Blend Leisure Shirt", price: 32.95 },
  { name: "Wise Android T-Shirt", price: 14.95 },
  { name: "Android Pride T-Shirt", price: 19.1 },
  { name: "Chrome Unisex T-Shirt", price: 11.35 },
  { name: "NY City Lights T-Shirt", price: 18.35 },
  { name: "Omi Tech Tee", price: 17.0 },
  { name: "YouTube S/S Triblend T-Shirt", price: 14.9 },
  { name: "Nest T-Shirt", price: 17.4 },
  { name: "98 Short Sleeve Tee", price: 14.3 },
  { name: "Cardboard T-Shirt", price: 14.2 },
  { name: "Short Sleeve Crew Neck Raglan", price: 13.1 },
  { name: "MTV Unisex Blue T-Shirt", price: 15.75 },
  { name: "Organic Me-To-We Tee", price: 23.6 },
  { name: "Tri-Blend Raglan Long Sleeve", price: 51.2 },
  { name: "Blueprint for a Better Inbox T-Shirt", price: 14.3 },
  { name: "YouTube Player T-Shirt - Unisex", price: 17.8 },
  { name: "G Logo White T-Shirt", price: 13.0 },
  { name: "Android Concert T-Shirt", price: 13.65 },
  { name: "Men's Bamboo T-Shirt", price: 20.65 },
  { name: "Android Pay Crew Neck T-Shirt", price: 19.4 },
  { name: "Google Maps T-Shirt", price: 18.35 },
  { name: "Est. 98 Baseball Tee", price: 17.9 },
  { name: "Mountain View T-Shirt", price: 16.5 },
];

const Mens_T_Shirt = () => {
  return (
    <>
      <div className="outwear">
        <div className="mens_t-shirt_img img_common"></div>
        <div>Men&apos;s T-Shirts</div>
        <div>({productData.length} items)</div>
      </div>
      <div className="mens_footwear_images">
        {productData.map((product, index) => (
          <div className="mens_outwear_data1" key={index}>
            <div className={`mens_t_shirt_img${index + 1}`} id={`image`}></div>
            <div>{product.name}</div>
            <div>${product.price}</div>
            <div>
              <AddToCartButton
                itemImage={`mens_t_shirt_img${index + 1}`}
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

export default Mens_T_Shirt;
