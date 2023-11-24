import React from "react";
import shampooPic from "../img/shampoo.png";

const TitleName = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="  border border-white sm:w-[38rem] h-[29rem] shadow-2xl">
        <h2 className="flex justify-center m-2 p-1 font-serif sm:text-4xl text-3xl  text-[#fff] font-bold">
          BHEEMAL &nbsp; SHAMPOO
        </h2>
        <div className=" flex justify-center -translate-y-4">
          <img className="w-[19rem]" alt="pic" src={shampooPic} />
        </div>
        <p className="sm:m-2 mx-5 p-2 font-semibold text-white font-sans text-lg -translate-y-20">
          Extracted from Himalayas and blended with natural ingredients.
        </p>
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
