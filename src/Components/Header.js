import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const aboutClick = () => {
    const ele = document.querySelector(".LaunchPage2");
    window.scrollTo({
      top: ele?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search.." />
      </div>
      <div className="header__options">
        <Link to="/">
          <p>Home</p>
        </Link>

        <a onClick={aboutClick}>
          <p>About</p>
        </a>
        <Link to="/wardrobe">
          <p>Wardrobe</p>
        </Link>

        <ShoppingBagIcon />
        <Link to="/login" className="headerLink__login">
          <AccountCircleIcon />
        </Link>
      </div>
      <div className="hamburger">
        <HeaderRight>
          <Menu onClick={() => setBurgerStatus(true)}>
            <MenuIcon />
          </Menu>
        </HeaderRight>
        <BurgerMenu show={burgerStatus}>
          <CloseMenu>
            <CloseButton onClick={() => setBurgerStatus(false)}>
              <CloseIcon />
            </CloseButton>
          </CloseMenu>
          <li>
            <Link to="/" className="header__link">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <a onClick={aboutClick}>
              <p>About</p>
            </a>
          </li>
          <li>
            <p>Wardrobe</p>
          </li>
          <li>
            <p>Cart</p>
          </li>
          <li>
            <Link to="/login" className="header__link">
              <p>Account</p>
            </Link>
          </li>
        </BurgerMenu>
      </div>
    </div>
  );
}
const HeaderRight = styled.div`
  padding-right: 20px;
  display: flex;
  cursor: pointer;
  right: 0;
  align-items: center;
`;
const Menu = styled(MenuIcon)`
  font-size: 40px !important;
`;
const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  color: black;
  width: 300px;
  z-index: 16;
  text-align: left;
  padding: 20px;
  list-style: none;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 5px;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .header__link {
    text-decoration: none;
    color: black;
  }
  li:hover {
    background-color: #f5f5f5;
    border-radius: 5px;
  }
`;
const CloseButton = styled(CloseIcon)`
  font-size: 30px !important;
  cursor: pointer;
`;
const CloseMenu = styled.div`
  display: flex;
  justify-content: flex-end !important;
`;

export default Header;
