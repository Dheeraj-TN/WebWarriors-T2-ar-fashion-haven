import React, { useState } from "react";
import { images } from "../constants";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Card14 = () => {
  const [image, setImage] = useState(images.Tshirt3_og);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  const handleGrey = () => {
    const f = document.getElementById("motion-img14");
    f.setAttribute(
      "style",
      "transform: translateX(-2000px); transition: all 1s ease-in-out; overflow: hidden"
    );
    setTimeout(() => {
      f.setAttribute(
        "style",
        "transform: translateX(2000px): 2000px;transition: overflow: hidden"
      );
      setImage(images.Tshirt3_ed);
    }, 500);
  };

  const handleRed = () => {
    const f = document.getElementById("motion-img14");
    f.setAttribute(
      "style",
      "transform: translateX(1000px); transition: all 1s ease-in-out; overflow: hidden"
    );
    setTimeout(() => {
      f.setAttribute(
        "style",
        "transform: translateX(-1000px): 2000px;overflow: hidden"
      );
      setImage(images.Tshirt3_og);
    }, 500);
  };

  return (
    <>
      <div className="Card-Wrapper">
        <motion.div
          className="card"
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.05}
          whileTap={{ cursor: "grabbing" }}
        >
          <div className="card-upper">
            <div className="card-logo">
              <img src={images.nike_logo} alt="" />
            </div>
            <div className="card-main">
              <div className="descr">
                <h2>NIKE Men's Max90</h2>
                <p>
                  <i class="fa-solid fa-tag"></i>Special PriceGet extra 46% off{" "}
                </p>
                <p>
                  <i class="fa-solid fa-tag"></i>Partner OfferSign up
                </p>
                <div
                  className="price"
                  style={{ background: "black;", color: "white" }}
                >
                  <h1>₹899</h1>
                </div>
              </div>
              <div className="main-img">
                <motion.img src={image} alt="" id="motion-img14" />
                <div className="rating">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="product-color">
              <div className="grey" onClick={handleGrey}></div>
              <div className="red" onClick={handleRed}></div>
            </div>
          </div>
          <div className="card-lower">Add to Cart</div>
        </motion.div>
      </div>
    </>
  );
};

export default Card14;
