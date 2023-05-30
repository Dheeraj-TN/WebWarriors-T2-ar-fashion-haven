import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
function Login() {
  return (
    <>
      <Header />
      <div className="login">
        <div className="login__gradient" />
        <div className="login__body">
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
            <h4>
              <span className="new">New to our wardrobe?</span>
              <Link to="/register" className="register">
                <span>Sign Up</span>
              </Link>
            </h4>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
