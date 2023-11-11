import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "firebase/auth";
function SignUp() {
  const regexMail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordformat = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [Errormsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || confirmPass === "") {
      alert("Enter all the fields");
    } else if (!email.match(regexMail)) {
      alert("Invalid email id");
    } else if (!password.match(passwordformat)) {
      alert(
        "Password should contain atlest 8 charecters with captital letter, small letters and special charecter."
      );
    } else if (phone.length !== 10) {
      alert("Invalid phone number");
    } else if (password !== confirmPass) {
      alert("Password not matching");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        console.log(userCred);
        if (auth) {
          toast.success("Login succesfful", {
            autoClose: 2000,
            pauseOnHover: true,
            closeOnClick: false,
          });
          navigate("/");
          setEmail("");
          setPassword("");
          navigate("/");
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPass("");
        }
      })
      .catch((err) => {
        toast.error("Invlaid credentail", {
          autoClose: 2000,
          pauseOnHover: false,
          closeOnClick: false,
        });
        console.log(err.message);
        navigate("/register");
      });
  };
  return (
    <>
      <Header />
      <div className="login">
        <div className="login__gradient" />
        <div className="login__body">
          <form>
            <h1>Sign Up</h1>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="number"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
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
            <input
              type="password"
              placeholder="Re-enter Paasword"
              onChange={(e) => setConfirmPass(e.target.value)}
              value={confirmPass}
            />
            <button onClick={signUp}>Sign Up</button>
            <h4>
              <span className="new">Already a member ? </span>
              <Link to="/login" className="register">
                <span>Sign In</span>
              </Link>
            </h4>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default SignUp;
