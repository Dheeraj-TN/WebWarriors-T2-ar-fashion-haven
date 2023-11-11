import React, { useEffect } from "react";
import { useState } from "react";
import CheckOutProduct from "./CheckOutProduct";
import "./Payment.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
//import { CardElement,useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { db } from "../firebase";
import { doc, addDoc, collection } from "firebase/firestore";
import axios from "./axios";
import { async } from "@firebase/util";
import Header from "../Components/Header";
// import { clientSecret } from 'firebase-tools/lib/api';
//const promise = await loadStripe('pk_test_51MEjdlSAw1gwAGnVx72jos1ypTK8basHaWPmTuXXKeDzgPXl8o4SN4auloacNg9kfGwQ9zJtI90vFllubqTkwOyZ00W3RsIVpe');
function Payment({ address, setAddress, text, setText }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const [succeeded, setSucceded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  // const [text, setText] = useState("");
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [products, setProducts] = useState([]);
  // const userRef = collection("db", "users");
  const productRef = collection(db, "orders");
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  // submit button of address when clicked
  const submitCicked = () => {
    setText(address);
  };
  useEffect(() => {
    //geneartes the client secret
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("The secret is : ", clientSecret);
  console.log(user, "🙂");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment Confirmation
        // db.collection("users")
        //   .doc(user?.uid)
        //   .collection("orders")
        //   .doc(paymentIntent.id)
        // const orderRef = collection("db", "orders")
        //   .doc(user?.uid)
        //   .collection("db", "orders")
        //   .doc(paymentIntent.id);
        const docRef = addDoc(productRef, {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
          date: new Date().toDateString(),
          time: new Date().toLocaleTimeString(),
        })
          .then(() => {
            console.log("added", docRef);
          })
          .catch((error) => {
            console.log(error);
          });
        setSucceded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });
        toast.success("Payment was successful", {
          autoClose: 2000,
          pauseOnHover: true,
          closeOnClick: false,
        });
        navigate("/orders");
      });
  };
  const handleChange = (event) => {
    //listen for changes in the card element
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <>
      <Header />
      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout(<Link to="/checkout">{basket?.length} items</Link>)
          </h1>
          {/* payment section - delivery adress */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>

              <p>BNMIT,Banasahankari</p>
              <p>Bangalore-560070</p>
            </div>
          </div>
          {/* payment section - Review items */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review Items And Delivery</h3>
            </div>
            <div className="payment__items">
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
          {/* payment section - payment methods */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              {/* use of stripe */}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order total : {value}</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />

                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
