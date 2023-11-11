import React from "react";
import LaunchPage2 from "./LaunchPage2";
import LaunchPage3 from "./LauncPage3";
import Header from "./Header";
import Footer from "./Footer";
import Login from "../Authentication/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateValue } from "../StateProvider";
function About() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      {!user?.email ? (
        (toast.warning("Login to continue", {
          autoClose: 2000,
          pauseOnHover: false,
          closeOnClick: false,
        }),
        (<Login />))
      ) : (
        <div className="about">
          <Header />
          <LaunchPage2 />
          <LaunchPage3 />
          <Footer />
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default About;
