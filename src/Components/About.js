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
            The Bheemal Shampoo was formulated by using the extract of Grewia
            optiva which is also known as Bheemal in Uttarakhand. The plant
            contains saponins thus, it has good detergency and cleansing
            property. The pH of all formulations in the range of 5-7. The pH
            plays an important role and helps in reduction of eye irritation.
            The shampoo is wholly prepared by using natural ingredients
            therefore it prevents the harm to hairs from the synthetic
            chemicals. Further, it will also promote the use of Grewia optiva
            (Bheemal) as surfactant in National and International market.
            <br />
            <br />
            - 100% Handmade Made by Skilled Artisan From Uttarakhand
            <br />
            - Material-Bheemal tree plants, soapberry and Shikakai
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
            Jadi Beaute’s Bhimal Shampoo is for individuals who are looking for
            a mild daily use shampoo which strengthens hair naturally. It
            prevents hair fall, repairs & adds lustre to dry & brittle hair.
            Grewia optiva (Bhimal) are trees found near agricultural fields in
            the hills and inhabitants consider them family trees. Traditionally,
            sap of Bhimal bark is used for washing hair. It contains saponins
            and the villagers use it as an alternative to soap. Bhimal has very
            good foaming capacity and is capable of reducing surface tension
            thus making it a perfect choice for use in shampoo as a natural
            surfactant.
            <br />
            <br />
            Wet your hair with lukewarm or room-temperature water and apply the
            shampoo thoroughly across your scalp. Wash off after 3-5 minutes.
            Let your hair dry naturally. Jadi Beaute’s Bhimal Shampoo is for
            individuals who are looking for a mild daily use shampoo which
            strengthens hair naturally. It prevents hair fall, repairs & adds
            lustre to dry & brittle hair It contains saponins and the villagers
            use it as an alternative to soap. Bhimal has very good foaming
            capacity and is capable of reducing surface tension thus making it a
            perfect choice for use in shampoo as a natural surfactant.
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
