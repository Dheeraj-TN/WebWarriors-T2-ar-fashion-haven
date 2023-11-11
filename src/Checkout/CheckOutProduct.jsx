import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";
import { Fade } from "react-reveal";
function CheckOutProduct({
  id,
  image,
  logo,
  title,
  price,
  rating,
  hideButton,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // var a = document.querySelector(".checkoutProduct");
    // a.setAttribute(
    //   "style",
    //   "transform: translateX(-600px); transition: all 0.3s"
    // );
    // setTimeout(() => {
    //   dispatch({
    //     type: "REMOVE_FROM_BASKET",
    //     id: id,
    //   });
    // }, 500);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
    //remove the item from basket
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__logo" src={logo} alt="" />
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>

        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckOutProduct;
