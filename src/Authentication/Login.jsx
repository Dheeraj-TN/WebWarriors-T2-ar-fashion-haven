import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useStateValue } from "../StateProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { signInWithGoogle } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const regexMail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordformat = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const navigate = useNavigate();
  const [Errormsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const showToast = () => toast.success("Login Successful");
  const signIn = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Enter email / password");
    } else if (!email.match(regexMail)) {
      alert("Invalid email id");
    } else if (!password.match(passwordformat)) {
      setErrorMsg(
        "Password should contain atlest 8 charecters with captital letter, small letters and special charecter."
      );
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        console.log("USer: " + userCred);
        if (auth) {
          //
          showToast();
          navigate("/");
          setEmail("");
          setPassword("");
        }
      })
      .catch((err) => {
        alert("Invalid credentials");
        console.log(err.message);
        navigate("/login");
      });
  };

  const googleSignIn = () => {
    signInWithGoogle()
      .then((userCred) => {
        console.log("USer: " + userCred);
        if (auth) {
          showToast();

          setTimeout(() => {
            navigate("/");
          }, 1000);
          setEmail("");
          setPassword("");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <Header />
      <div className="login">
        <div className="login__gradient" />
        <div className="login__body">
          <form>
            <h1>Sign In</h1>
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button onClick={signIn}>Sign In</button>
            <h4>
              <span className="new">New to our wardrobe?</span>
              <Link to="/register" className="register">
                <span>Sign Up</span>
              </Link>
            </h4>
          </form>

          <button
            className="login-button"
            onClick={googleSignIn}
            id="login-button"
          >
            Sign In With Google
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
