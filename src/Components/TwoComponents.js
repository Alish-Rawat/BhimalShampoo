import React from "react";
import product1 from "../img/Product1.jpeg";
import product2 from "../img/Product2.jpeg";

const TwoComponents = () => {
  return (
    <div className="flex">
      <div className="m-10 absolute left-0 opacity-90 shadow-2xl bg-blue-300 w-[16rem] h-[36rem] rounded-2xl ">
        <div className="p-2 mt-2">
          <img className="opacity-none" alt="" src={product1} />
          <p className="text-white p-2 mt-3 border border-blue-gray-400">
            Herbal Bhimal Shampoo is made from the extract of Bhimal tree
            plants’ bark, a natural ingredient known for its beneficial
            properties. The extract is sourced from the Uttarakhand Himalayas
            and blended with other natural ingredients to create a shampoo that
            nourishes and strengthens hair. This shampoo can help you achieve
            healthy, lustrous locks that are free from damage.
          </p>
        </div>
      </div>
      <div className="m-10 opacity-90 absolute shadow-2xl right-0 bg-blue-400 w-[16rem] h-[35rem] rounded-2xl">
        <div className="p-2 mt-2">
          <img className="opacity-none" alt="" src={product2} />
          <p className="text-white p-2 mt-3 border border-blue-gray-400">
            Herbal Bhimal Shampoo is made from the extract of Bhimal tree
            plants’ bark, a natural ingredient known for its beneficial
            properties. The extract is sourced from the Uttarakhand Himalayas
            and blended with other natural ingredients to create a shampoo that
            nourishes and strengthens hair. This shampoo can help you achieve
            healthy, lustrous locks that are free from damage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoComponents;
