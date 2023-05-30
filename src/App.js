import logo from './logo.svg';
import './App.css';
import { useRef } from "react";
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

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/wardrobe" element={<Wardrobe />} />
      </Routes>
    </Router>
  );
}

export default App;
