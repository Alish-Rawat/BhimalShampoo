import React from "react";
import { Link } from "react-router-dom";
import log from "../img/logo.jpeg";

const Head = () => {
  return (
    <div className="absolute w-full shadow-xl">
      <div className="relative flex justify-between px-0 w-full sm:my-2 sm:pl-12 sm:px-2 ">
        <Link to="#">
          <img
            alt="logo"
            className="  w-[4rem] rounded-full shadow-2xl m-4 sm:m-0 "
            src={log}
          />
        </Link>

        <ul className="flex items-center justify-evenly w-[35em] text-lg sm:text-xl font-sans font-bold text-white">
          <li className="hover:bg-blue-gray-200 rounded-lg p-2 ">
            <a href="/BheemalShampoo/"> Homeuu </a>
          </li>

          <li
            className="hover:bg-blue-gray-200 rounded-lg p-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#About").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            {" "}
            About
          </li>

          <li
            className="hover:bg-blue-gray-200 rounded-lg p-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#Contacts").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Contacts
          </li>
          <li className="hover:bg-blue-gray-200 rounded-lg p-2">
            <Link to="https://www.amazon.in/Herbal-Bheemal-Shampoo-500-Pack/dp/B0BJV3ZS6N/ref=sr_1_2?adgrpid=130189773118&ext_vrnc=hi&gclid=CjwKCAiAgeeqBhBAEiwAoDDhn5H96WKj2EOOO_-dFcS8Eji2Ep4-AZqmale62uq2BDqNCuQ59RY0xhoCE38QAvD_BwE&hvadid=590283464781&hvdev=c&hvlocphy=9144965&hvnetw=g&hvqmt=e&hvrand=7073890956038557352&hvtargid=kwd-1920451460828&hydadcr=5660_2300254&keywords=herbal+bhimal+shampoo&qid=1700438072&sr=8-2">
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
