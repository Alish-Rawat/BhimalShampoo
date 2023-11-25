import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product5 from "../img/Project5.jpg";
import product1 from "../img/Project1.jpg";
import product2 from "../img/Project2.jpg";
import product6 from "../img/Project6.png";
import product7 from "../img/Project3.jpg";
import product8 from "../img/Project8.jpg";
import product3 from "../img/Product3.jpeg";

import Slider from "react-slick";

export const SimpleSlider = () => {
  var settings = {
    className:
      "sm:h-[22rem] h-[22rem] w-[22rem] sm:w-[40rem] m-4 shadow-xl rounded-lg",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // margin: 10,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="sm:h-[30rem]  w-[45rem] mt-3  rounded-full">
      <div className=" flex justify-center ">
        <Slider {...settings}>
          <div className="">
            <img
              //   className="flex items-center justify-center h-screen"
              className="w-full sm:h-[28rem] h-[18rem] rounded-xl"
              alt="img"
              src={product3}
            />
            {/* <p className="m-4 border border-s-blue-gray-200 p-2">
              Herbal Bhimal Shampoo is made from the extract of Bhimal tree
              plants’ bark, a natural ingredient known for its beneficial
              properties. The extract is sourced from the Uttarakhand Himalayas
              and blended with other natural ingredients to create a shampoo
              that nourishes and strengthens hair. With regular use, this
              shampoo can help you achieve healthy, lustrous locks that are free
              from damage.
            </p> */}
          </div>
          <div>
            <img
              className="w-full sm:h-[28rem] h-[18rem] rounded-xl "
              alt="img"
              src={product6}
            />
            {/* <p className="m-4 border border-s-blue-gray-200 p-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p> */}
          </div>
          <div>
            <img
              className="w-full sm:h-[28rem] h-[18rem] rounded-xl "
              alt="img"
              src={product5}
            />
            {/* <p className="m-4 border border-s-blue-gray-200 p-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary.
            </p> */}
          </div>
          <div>
            <img
              className="w-full sm:h-[28rem] h-[18rem] rounded-xl "
              alt="img"
              src={product1}
            />
            {/* <p className="m-4 border border-s-blue-gray-200 p-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary.
            </p> */}
          </div>
          <div>
            <img
              className="w-full sm:h-[28rem] h-[18rem] rounded-xl "
              alt="img"
              src={product2}
            />
            {/* <p className="m-4 border border-s-blue-gray-200 p-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary.
            </p> */}
          </div>
          <div>
            <img
              className="w-full sm:h-[28rem] h-[18rem] rounded-xl "
              alt="img"
              src={product8}
            />
            {/* <p className="m-4 border border-s-blue-gray-200 p-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary.
            </p> */}
          </div>
          <div>
            <img
              className="w-full sm:h-[28rem] h-[18rem] rounded-xl "
              alt="img"
              src={product7}
            />
            {/* <p className="m-4 border border-s-blue-gray-200 p-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary.
            </p> */}
          </div>
        </Slider>
      </div>
    </div>
  );
};
