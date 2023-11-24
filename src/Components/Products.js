import React from "react";
import { Link } from "react-router-dom";
import P1 from "../img/PShampoo.png";
import P2 from "../img/PMasala2.png";
import P3 from "../img/PJaljeera2.png";

const Products = () => {
  return (
    <>
      <div className="flex justify-center font-serif text-5xl sm:p-1  text-white h-[4rem]">
        Products
      </div>
      <div className="sm:flex justify-center border border-white h-[79rem] sm:h-[32rem]">
        <ul className="block sm:flex justify-center sm:border border-white sm:w-[70%] h-[25rem] sm:m-6">
          <li className="m-2 border border-white sm:w-[33%]">
            <img className="px-2" alt="img" src={P2} />
            <h1 className="mt-4 flex justify-center text-white font-serif text-2xl font-bold ">
              Pahadi Masala
            </h1>
            <div className="m-4 flex  justify-center">
              <button className="text-white  text-lg bg-red-600 p-2  rounded-md font-bold hover:bg-green-800 shadow-xl">
                <Link to="https://www.amazon.in/Herbal-Bheemal-Shampoo-500-Pack/dp/B0BJV3ZS6N/ref=sr_1_2?adgrpid=130189773118&ext_vrnc=hi&gclid=CjwKCAiAgeeqBhBAEiwAoDDhn5H96WKj2EOOO_-dFcS8Eji2Ep4-AZqmale62uq2BDqNCuQ59RY0xhoCE38QAvD_BwE&hvadid=590283464781&hvdev=c&hvlocphy=9144965&hvnetw=g&hvqmt=e&hvrand=7073890956038557352&hvtargid=kwd-1920451460828&hydadcr=5660_2300254&keywords=herbal+bhimal+shampoo&qid=1700438072&sr=8-2">
                  Buy Now
                </Link>
              </button>
            </div>
          </li>
          <li className=" my-2 border border-white sm:w-[33%]">
            <img className="px-2" alt="img" src={P1} />
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
          </li>
          <li className="m-2 border border-white sm:w-[33%]">
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
          </li>
        </ul>
      </div>
    </>
  );
};

export default Products;
