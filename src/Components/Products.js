import React from "react";
import { Link } from "react-router-dom";
import P1 from "../img/PShampoo.png";
import P11 from "../img/PShampoo2.jpg";
import P2 from "../img/PMasala2.png";
import P3 from "../img/PJaljeera2.png";

const Products = () => {
  return (
    <div className=" h-[40rem]">
      <div className="flex justify-center font-serif text-5xl sm:p-1  font-bold h-[4rem] ">
        Products
      </div>
      <div className="sm:flex justify-center  h-[79rem] sm:h-[32rem] translate-y-16">
        <ul className="block sm:flex  justify-center  border-red-500 space-x-20">
          <li className="m-2 bg-white border  sm:w-[20%] h-[93%]">
            <img className="border border-gray-400" alt="img" src={P2} />
            <h1 className="pt-8 flex justify-center text-black  text-2xl font-semibold  ">
              Pahadi Masala
            </h1>
            <p className=" px-12 py-4 font-serif text-[17px]">
              Pahadi Masala is a mix of various herbs and spices cold-pressed
              using ancient technology.
            </p>
            <div className="m-4 flex  justify-center">
              <button className="text-white  text-lg bg-red-600 p-2  rounded-md font-bold hover:bg-green-800 shadow-xl">
                <Link to="https://www.amazon.in/Herbal-Bheemal-Shampoo-500-Pack/dp/B0BJV3ZS6N/ref=sr_1_2?adgrpid=130189773118&ext_vrnc=hi&gclid=CjwKCAiAgeeqBhBAEiwAoDDhn5H96WKj2EOOO_-dFcS8Eji2Ep4-AZqmale62uq2BDqNCuQ59RY0xhoCE38QAvD_BwE&hvadid=590283464781&hvdev=c&hvlocphy=9144965&hvnetw=g&hvqmt=e&hvrand=7073890956038557352&hvtargid=kwd-1920451460828&hydadcr=5660_2300254&keywords=herbal+bhimal+shampoo&qid=1700438072&sr=8-2">
                  Buy Now
                </Link>
              </button>
            </div>
          </li>
          <li className="m-2 bg-white border  sm:w-[20%] h-[93%]">
            <img
              className="border border-gray-400 h-[12rem] w-full"
              alt="img"
              src={P11}
            />
            <h1 className="pt-8 flex justify-center text-black  text-2xl font-bold ">
              Bheemal Shampoo
            </h1>
            <p className="px-12 py-4 font-serif text-[17px]">
              It is made from the extract of Bhimal tree plants' barck as a main
              contituents and Uttarakhand Himalayas.
            </p>
            <div className="m-4 flex  justify-center">
              <button className="text-white  text-lg bg-red-600 p-2  rounded-md font-bold hover:bg-green-800 shadow-xl">
                <Link to="https://www.amazon.in/Herbal-Bheemal-Shampoo-500-Pack/dp/B0BJV3ZS6N/ref=sr_1_2?adgrpid=130189773118&ext_vrnc=hi&gclid=CjwKCAiAgeeqBhBAEiwAoDDhn5H96WKj2EOOO_-dFcS8Eji2Ep4-AZqmale62uq2BDqNCuQ59RY0xhoCE38QAvD_BwE&hvadid=590283464781&hvdev=c&hvlocphy=9144965&hvnetw=g&hvqmt=e&hvrand=7073890956038557352&hvtargid=kwd-1920451460828&hydadcr=5660_2300254&keywords=herbal+bhimal+shampoo&qid=1700438072&sr=8-2">
                  Buy Now
                </Link>
              </button>
            </div>
          </li>
          <li className="m-2 bg-white border  sm:w-[20%] h-[93%]">
            <img
              className="border border-gray-400 h-[12rem] w-full"
              alt="img"
              src={P3}
            />
            <h1 className="pt-8 flex justify-center text-black  text-2xl font-bold ">
              Pahadi Jaljeera
            </h1>
            <p className="px-12 py-4 font-serif text-[17px]">
              Made from fresh and natural Himalayan herbs and ingredients making
              it the perfect addition for cooking.
            </p>
            <div className="m-4 flex  justify-center">
              <button className="text-white  text-lg bg-red-600 p-2  rounded-md font-bold hover:bg-green-800 shadow-xl">
                <Link to="https://www.amazon.in/Herbal-Bheemal-Shampoo-500-Pack/dp/B0BJV3ZS6N/ref=sr_1_2?adgrpid=130189773118&ext_vrnc=hi&gclid=CjwKCAiAgeeqBhBAEiwAoDDhn5H96WKj2EOOO_-dFcS8Eji2Ep4-AZqmale62uq2BDqNCuQ59RY0xhoCE38QAvD_BwE&hvadid=590283464781&hvdev=c&hvlocphy=9144965&hvnetw=g&hvqmt=e&hvrand=7073890956038557352&hvtargid=kwd-1920451460828&hydadcr=5660_2300254&keywords=herbal+bhimal+shampoo&qid=1700438072&sr=8-2">
                  Buy Now
                </Link>
              </button>
            </div>
          </li>
          {/* <li className=" my-2 border border-white sm:w-[20%]">
            <Link to="/productdisplay">
              <img className="p-6" alt="img" src={P11} />
              <h1 className="sm:-translate-y-3 -translate-y-7 flex justify-center text-white font-serif text-2xl font-bold ">
                Bheemal Shampoo
              </h1>
              <div className=" flex sm:m-2 mb-5 justify-center">
                <button className="text-white  text-lg bg-red-600 p-2 rounded-md font-bold hover:bg-green-800 shadow-xl">
                  <Link to="https://www.amazon.in/Herbal-Bheemal-Shampoo-500-Pack/dp/B0BJV3ZS6N/ref=sr_1_2?adgrpid=130189773118&ext_vrnc=hi&gclid=CjwKCAiAgeeqBhBAEiwAoDDhn5H96WKj2EOOO_-dFcS8Eji2Ep4-AZqmale62uq2BDqNCuQ59RY0xhoCE38QAvD_BwE&hvadid=590283464781&hvdev=c&hvlocphy=9144965&hvnetw=g&hvqmt=e&hvrand=7073890956038557352&hvtargid=kwd-1920451460828&hydadcr=5660_2300254&keywords=herbal+bhimal+shampoo&qid=1700438072&sr=8-2">
                    Buy Now
                  </Link>
                </button>
              </div>
            </Link>
          </li>
          <li className="m-2 border border-white sm:w-[20%]">
            <img className="" alt="img" src={P3} />
            <h1 className="mt-3 flex justify-center text-white font-serif text-2xl font-bold ">
              Pahadi Jaljeera
            </h1>
            <div className=" flex sm:m-2 m-4 justify-center">
              <button className="text-white  text-lg bg-red-600 p-2 rounded-md font-bold hover:bg-green-800 shadow-xl">
                <Link to="https://www.amazon.in/Herbal-Bheemal-Shampoo-500-Pack/dp/B0BJV3ZS6N/ref=sr_1_2?adgrpid=130189773118&ext_vrnc=hi&gclid=CjwKCAiAgeeqBhBAEiwAoDDhn5H96WKj2EOOO_-dFcS8Eji2Ep4-AZqmale62uq2BDqNCuQ59RY0xhoCE38QAvD_BwE&hvadid=590283464781&hvdev=c&hvlocphy=9144965&hvnetw=g&hvqmt=e&hvrand=7073890956038557352&hvtargid=kwd-1920451460828&hydadcr=5660_2300254&keywords=herbal+bhimal+shampoo&qid=1700438072&sr=8-2">
                  Buy Now
                </Link>
              </button>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Products;
