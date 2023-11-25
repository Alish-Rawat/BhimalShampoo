import React from "react";
import { SimpleSlider } from "./Carousel";
import Employment from "./Employment";

const About = () => {
  return (
    <div id="About" className="bg-[#00011d] bg-cover my-1">
      <div className="flex justify-center w-full ">
        <div>
          <h1 className="flex justify-center font-sans text-5xl font-bold text-white m-6  p-2 sm:translate-y-3 underline underline-offset-8">
            About
          </h1>
          <p className="sm:m-8 m-4 sm:p-10 pl-4 tracking-wider text-[1.1rem] text-white">
            The Bhimal shampoo was formulated by using the extract of Grewia
            optiva which is also known as Bhimal in Uttarakhand. The plant
            contains saponins thus, it has good detergency and cleansing
            property. The pH of all formulations in the range of 5-7. The pH
            plays an important role and helps in reduction of eye irritation.
            The shampoo is wholly prepared by using natural ingredients
            therefore it prevents the harm to hairs from the synthetic
            chemicals. Further, it will also promote the use of Grewia optiva
            (Bhimal) as surfactant in National and International market.
            <br />
            <br />
            - 100% Handmade Made by Skilled Artisan From Uttarakhand
            <br />
            - Material-Bhimal tree plants, soapberry and Shikakai
            <br />- Herbal Bheemal Shampoo 500ml Bottle
            <br />
            - Repairs dead skin cells Repairs & adds lustre to dry & brittle
            Hair
            <br />
            - Prevents hair fall Stimulates hair regrowth Natural conditioner
            <br />
            - Strengthen’s hair follicles Natural & Ayurvedic
            <br />
            <br />
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
            <br />
            <br />
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </div>
      <Employment />
      <div className="flex justify-center">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default About;
