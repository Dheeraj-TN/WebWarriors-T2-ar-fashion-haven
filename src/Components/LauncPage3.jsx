import React from "react";
import "./LaunchPage3.css";
import { Fade } from "react-reveal";
import Lp3Options1 from "./Lp3Options1";
import Design1 from "../Design/Design1";
import Design2 from "../Design/Design2";
import Design3 from "../Design/Design3";
import Design4 from "../Design/Design4";
function LaunchPage3() {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Fade up>
      <div className="LaunchPage3-section wrapper">
        <h2 className="title">Unleash your style with AR-enhanced fashion.</h2>
        <p className="text">
          Step into the future of fashion with our AR experiences!
        </p>
        <span className="description">
          Discover the perfect accessories for your style thorugh our AR
          enhanced browisng experiences.
        </span>

        <div className="optionsd2">
          <Design3
            image="https://www.augray.com/blog/wp-content/uploads/2020/11/AR-Commerce.jpg"
            title="Virtual try on"
            desc="Augmented Reality provides a real-world experience as an overlay. The technology can recreate a realistic environments by layering videos, images, and 3D content on top of real-world objects. Delivering AR experiences is not limited to headsets. AR can be deployed on smartphones, with projectors, and non-specialized hardware as well."
          />
          <Design4
            image="https://www.theindustry.fashion/wp-content/uploads/2021/08/ARskins.jpg"
            title="AR visualisation"
            desc="Augmented Reality provides a real-world experience as an overlay. The technology can recreate a realistic environments by layering videos, images, and 3D content on top of real-world objects. Delivering AR experiences is not limited to headsets. AR can be deployed on smartphones, with projectors, and non-specialized hardware as well."
          />
          <Design3
            image="https://www.altamira.ai/wp-content/uploads/2022/12/ar-for-clothing.jpg"
            title="AR Clothing"
            desc="Simply choose the brand or retailer you want to shop with and select the AR option. Then, use your smartphone or tablet to scan your body, and the technology will create a virtual 3D model of you to try on clothes. You can experiment with different colors, patterns, and styles until you find the look that's just right for you."
          />
        </div>

        <div className="options2Main">
          <Fade left>
            <img src="https://wearfits.com/img/10.jpg" alt="" />
          </Fade>
          <Fade right>
            <div className="options2">
              <Design1
                title="Footware"
                desc="The most comprehensive solution: Automatic 3D digitization based on photos. Virtual try-on on feet in AR mirror. Mobile foot measurement scan (6 dimensions) and accurate size recommendation."
                shop="Shop now"
              />
              <Design2
                title="Apparels"
                desc="The best 3D/AR virtual fitting solution on the market: Virtual closet with AR and 3D web viewer. Heatmap size fitting visualization. Easy digitization based on ZPAC or DXF patterns with grading and fabric data."
                shop="Shop now"
              />
            </div>
          </Fade>
          <Fade left>
            <div className="options2">
              <Design2
                title="Digital Tranformation"
                desc="We provide comprehensive solutions for the digital transformation process in the fashion industry - apparel, footwear and accessories. We cover all key areas: digitization, visualization and size fitting."
                shop="Get More Info"
              />
              <Design1
                title="Augmented Reality"
                desc="Convert any 3D objects into Augmented Reality automatically with our drag-and-drop tool. WebAR is available for iOS and Android devices. Ready for the Metaverse, 5G and upcoming AR glasses."
                shop="Go to AR"
              />
            </div>
          </Fade>
        </div>
      </div>
      <button className="back-button" onClick={handleTop}>
        Top
      </button>
    </Fade>
  );
}

export default LaunchPage3;
