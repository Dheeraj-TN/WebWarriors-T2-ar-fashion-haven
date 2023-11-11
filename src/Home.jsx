import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import LaunchPage1 from "./Components/LaunchPage1";
import LaunchPage2 from "./Components/LaunchPage2";
// import LaunchPage3 from "./Components/LauncPage3";
// import Footer from "./Components/Footer";
import { PropagateLoader } from "react-spinners";
import logo from "./logo.png";
import "./Home.css";
import { useStateValue } from "./StateProvider";
import Login from "./Authentication/Login";
import LaunchPage4 from "./Components/LaunchPage4";
import Footer from "./Components/Footer";
function Home() {
  const [loading, setLoading] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="home">
      {loading ? (
        <div className="loader">
          <img src={logo} alt="" />
          <PropagateLoader
            className="loader__content"
            color={"#f50057"}
            loading={loading}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : !user ? (
        <Login />
      ) : (
        <>
          <Header />
          <LaunchPage1 />
          <LaunchPage2 />
          <LaunchPage4 />
          {/* <LaunchPage3 /> */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
