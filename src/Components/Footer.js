import React from "react";

const Footer = () => {
  return (
    <div className=" flex justify-center bg-black text-white text-bold font-serif h-[10rem] w-full absolute ">
      <div className="w-full sm:flex justify-evenly items-center text-md sm:text-lg">
        <div className="m-2 p-2 flex justify-center sm:block">
          <p>Contacts :</p> <span>9999999999 , 88888888888</span>
        </div>
        <p className=" m-2 pl-6  flex justify-center sm:block">
          Address : near Abhimanyu Cricket Academy P.O. Sinola, Jamoliwala,
          <br /> Bhagwant Pur, Guniyal Gaon, Uttarakhand 248001, India
        </p>
      </div>
    </div>
  );
};

export default Footer;
