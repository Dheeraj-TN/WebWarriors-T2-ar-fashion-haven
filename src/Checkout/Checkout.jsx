import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "../StateProvider";
import Header from "../Components/Header";
import Login from "../Authentication/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      <Header />
      {!user?.email ? (
        (toast.warning("Login to continue", {
          autoClose: 2000,
          pauseOnHover: false,
          closeOnClick: false,
        }),
        (<Login />))
      ) : (
        <div className="checkout">
          <div className="checkout__left">
            <div>
              <h3>Hello , {user?.email}</h3>
              <h2 className="checkout__title">Your Shopping Basket</h2>

              {basket.map((item) => (
                <CheckOutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>

          <div className="checkout__right">
            <Subtotal />
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default Checkout;
