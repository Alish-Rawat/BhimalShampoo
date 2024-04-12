import React from "react";
import Products from "./Products";
import TitleName from "./TitleName";
// import TwoComponents from "./TwoComponents";

// import { SimpleSlider } from "./Carousel";

const Body = () => {
  return (
    <>
      {/* <TwoComponents /> */}
      <div className=" bg-[#f8f3f0]  sm:bg-cover ">
        <div className="flex w-full h-[80vh] translate-y-[9rem]">
          {/* <Carousel /> */}
          <TitleName />
        </div>
        <Products />
      </div>
      {/* <SimpleSlider /> */}
    </>
    // <div className=""></div>
  );
};

export default Body;
