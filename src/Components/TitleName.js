import React from "react";
import shampooPic from "../img/shampoo.png";
import shampoo from "../img/shampoo 2.png";

const TitleName = () => {
  return (
    <div className="flex items-center justify-center gap-[21rem] bg-[#f0e1da] w-full h-[27rem] -translate-y-8">
      {/* <div className="sm:mt-14  border border-white sm:w-[38rem] h-[29rem] shadow-2xl">
        <h2 className="flex justify-center m-2 p-1 font-serif sm:text-4xl text-3xl  text-[#fff] font-bold">
          BHEEMAL &nbsp; SHAMPOO
        </h2>
        <div className=" flex justify-center -translate-y-4">
          <img className="w-[18rem] -translate-y-6" alt="pic" src={shampoo} />
        </div>
        <p className="sm:m-2 mx-5 p-2 font-semibold text-white font-sans text-lg -translate-y-24">
          Extracted from Himalayas and blended with natural ingredients.
        </p>
      </div> */}
      <div className=" w-[20rem] h-[20rem]  mt-10">
        <h3 className=" ml-4 font-semibold mt-8">From the Moutains</h3>
        <h2 className="flex justify-center mx-2 mt-4 p-1 font-serif sm:text-5xl text-3xl   font-bold">
          BHEEMAL &nbsp; SHAMPOO
        </h2>
        <p className="sm:m-2 mx-5 p-2  font-sans text-sm ">
          Extracted from Himalayas and blended with natural ingredients.
          Transforming your hair for the better Naturally.
        </p>
        <button className="border bg-red-400 text-white py-2 px-4 font-medium text-sm  rounded-full m-4">
          SEE COLLECTION
        </button>
      </div>
      <div className=" w-[20rem] h-[20rem] -translate-y-4">
        <img className="w-[20rem] -translate-y-12" alt="pic" src={shampoo} />
      </div>
    </div>
  );
};

export default TitleName;

//  here are many variations of passages of Lorem Ipsum available,
// but the majority have suffered alteration in some form, by injected
// humour, or randomised words which don't look even slightly believable. If
// you are going to use a passage of Lorem Ipsum, you need to be sure there
// isn't anything embarrassing hidden in the middle of text. All the Lorem
// Ipsum generators on the Internet tend to repeat predefined chunks as
// necessary, making this the first true generator on the Internet. It uses a
// dictionary of over 200 Latin words, combined with a handful of model
// sentence structures, to generate Lorem Ipsum which looks reasonable. The
// generated Lorem Ipsum is therefore always free from repetition, injected
// humour, or non-characteristic words etc.
