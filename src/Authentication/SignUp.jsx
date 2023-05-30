import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
function SignUp() {
  return (
    <>
      <Header />
      <div className="login">
        <div className="login__gradient" />
        <div className="login__body">
          <form>
            <h1>Sign Up</h1>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Re-enter Paasword" />
            <button>Sign Up</button>
            <h4>
              <span className="new">Already a member ? </span>
              <Link to="/login" className="register">
                <span>Sign In</span>
              </Link>
            </h4>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
