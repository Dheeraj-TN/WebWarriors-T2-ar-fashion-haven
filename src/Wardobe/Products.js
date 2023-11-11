import React, { useState } from "react";
import { images } from "../constants";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./Products.css";
import { useStateValue } from "../StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Products = ({ id, img1, img2, logo, title, price, rating }) => {
  const [image, setImage] = useState(img1);
  const [{ basket, user }, dispatch] = useStateValue();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  const addToBasket = () => {
    toast.success("Added to Cart", {
      autoClose: 2000,
      pauseOnHover: false,
      closeOnClick: false,
    });
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        logo: logo,
        title: title,
        image: img1,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <>
      <div className="Card-Wrapper1">
        <motion.div
          className="card1"
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.05}
          whileTap={{ cursor: "grabbing" }}
        >
          <div className="card-upper">
            <div className="card-logo">
              <img src={logo} alt="" />
            </div>
            <div className="card-main">
              <div className="descr">
                <h2>{title}</h2>
                <p>
                  <i class="fa-solid fa-tag"></i>Special PriceGet extra 46% off{" "}
                </p>
                <p>
                  <i class="fa-solid fa-tag"></i>Partner OfferSign up
                </p>
                <div className="price2">
                  <h1>₹{price}</h1>
                </div>
              </div>
              <div className="main-img">
                <motion.img src={image} alt="" id={`${id}`} />
                <div className="rating">
                  {Array(rating)
                    .fill()
                    .map((_, i) => (
                      <p>⭐️</p>
                    ))}
                </div>
              </div>
            </div>
            {/* <div className="product-color">
                        <div className="grey" onClick={handleGrey}></div>
                        <div className="red" onClick={handleRed}></div>
                    </div> */}
          </div>
          <div className="card-lower" onClick={addToBasket}>
            Add to Cart
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Products;
