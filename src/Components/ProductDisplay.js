// import React from "react";
// import shampoo from "../img/shampoo.png";
// import "./ProductDisplay.css";

// const ProductDisplay = () => {
//   return (
//     <div className="productdisplay bg-hero">
//       <div className="productdisplay-left">
//         <div className="productdisplay-img-list">
//           <img src={shampoo} alt="" />
//           <img src={shampoo} alt="" />
//           <img src={shampoo} alt="" />
//           <img src={shampoo} alt="" />
//         </div>
//         <div className="productdisplay-img">
//           <img className="productdisplay-main-img" src={shampoo} alt="" />
//         </div>
//       </div>
//       <div className="productdisplay-right"></div>
//     </div>
//   );
// };

// export default ProductDisplay;

import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../img/star_icon.png";
import star_dull_icon from "../img/star_dull_icon.png";
import shampoo from "../img/shampoo 2.png";
import DiscriptionBox from "./DiscriptionBox/DiscriptionBox";
// import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay(props) {
  //   const { product } = props;
  //   const { addToCart } = useContext(ShopContext);
  return (
    <div className="background1">
      <div className="productdisplay ">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={shampoo} alt="" />
            <img src={shampoo} alt="" />
            <img src={shampoo} alt="" />
            <img src={shampoo} alt="" />
          </div>

          <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={shampoo} alt="" />
          </div>
        </div>

        <div className="productdisplay-right">
          <h1>Bheemal Shampoo</h1>
          <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">₹ 500</div>
            <div className="productdisplay-right-price-new">₹ 400</div>
          </div>
          <div className="productdisplay-right-description">
            • 100% Handmade Made by Skilled Artisan From Uttarakhand <br />•
            Material-Bheemal tree plants, soapberry and Shikakai
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              {/* <div>XL</div>
              <div>XXL</div> */}
            </div>
          </div>
          <button
          //   onClick={() => {
          //     addToCart(product.id);
          //   }}
          >
            ADD TO CART
          </button>
          <p className="productdisplay-right-category">
            <span>Category :</span> Shampoo
          </p>
          <p className="productdisplay-right-category">
            <span>Tags :</span> Organic, Hair
          </p>
        </div>
      </div>
      <DiscriptionBox />
    </div>
  );
}

export default ProductDisplay;
