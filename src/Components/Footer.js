import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../logo.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer1">
          <h3>Online Shopping</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Beauty</p>
        </div>
        <div className="footer1">
          <h3>Customer Policies</h3>
          <p>Contact us</p>
          <p>FAQ</p>
          <p>T&C</p>
          <p>Shipping</p>
        </div>
        <div className="footer1">
          <h3>Useful Links</h3>
          <p>Store Locator</p>
          <p>Size Guide</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__left">
          <p>© 2023 AR fasion Inc. All rights reserved.</p>
        </div>
        <div className="footer__right">
          <LinkedInIcon />
          <InstagramIcon />
          <FacebookIcon />
          <WhatsAppIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
