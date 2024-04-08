import React from "react";
import "./DiscriptionBox.css";

const DiscriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          The Bheemal Shampoo was formulated by using the extract of Grewia
          optiva which is also known as Bheemal in Uttarakhand. The plant
          contains saponins thus, it has good detergency and cleansing property.
          The pH of all formulations in the range of 5-7. The pH plays an
          important role and helps in reduction of eye irritation. <br /> <br />{" "}
          The shampoo is wholly prepared by using natural ingredients therefore
          it prevents the harm to hairs from the synthetic chemicals. Further,
          it will also promote the use of Grewia optiva (Bheemal) as surfactant
          in National and International market.
        </p>
      </div>
    </div>
  );
};

export default DiscriptionBox;
