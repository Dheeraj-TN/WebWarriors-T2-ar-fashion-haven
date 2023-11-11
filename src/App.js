import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from "react";
import Header from "./Components/Header";
import LaunchPage1 from "./Components/LaunchPage1";
import LaunchPage2 from "./Components/LaunchPage2";
import LaunchPage3 from "./Components/LauncPage3";
import Footer from "./Components/Footer";
import WebgiViewer from "./Components/WebgiViewer";
import SoundSection from "./Components/SoundSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import Wardrobe from "./Wardobe/Wardrobe";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import About from "./Components/About";
import Checkout from "./Checkout/Checkout";
import Payment from "./Checkout/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./Checkout/Order";
import Orders from "./Checkout/Orders";
import SearchPage from "./Components/SearchPage";
const promise = loadStripe(
  "pk_test_51MHzr0SAd63srqsxpFscqJBLsEF42GIQ81uGeQZ9Ou1zq1HXHjxLsKuKVnbQF0IBLqRIqDR0AaTVevib5aLldg0k00SgjughDE"
);

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User 🧑‍💻: " + authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    //eslint-disable-next-line
  }, []);
  return (
    <Elements stripe={promise}>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/wardrobe" element={<Wardrobe />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </Elements>
  );
}

export default App;
