import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../Another_image-fotor-bg-remover-2023060114656.png";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [{ basket, user }, dispatch] = useStateValue();
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();
  const search_redirect = () => {
    if (searchItem === "") {
      return;
    }
    sessionStorage.setItem("searchItem", searchItem);
    setSearchItem("");
    navigate("/search");
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.warning("Logged out", {
          autoClose: 2000,
          pauseOnHover: true,
          closeOnClick: false,
        });
        alert("User Logged out");
        navigate("/login");
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="header" id="header">
      <Link to="/">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="header__search">
        <SearchIcon onClick={search_redirect} />
        <input
          type="text"
          placeholder="Search.."
          value={searchItem}
          onChange={(event) => setSearchItem(event.target.value)}
        />
      </div>
      <div className="header__options">
        <Link to="/">
          <p>Home</p>
        </Link>

        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/wardrobe">
          <p>Wardrobe</p>
        </Link>
        <Link to="/orders">
          <p>Your Orders</p>
        </Link>
        <Link to="/checkout">
          <div
            className="cart"
            style={{ display: "flex", alignItems: "center" }}
          >
            <ShoppingBagIcon />
            <span className="header__basketCount">{basket?.length}</span>
          </div>
        </Link>
        <Link to="/login" className="headerLink__login">
          <AccountCircleIcon />
        </Link>
        <div className="logout" onClick={logout}>
          {user?.email && <LogoutIcon />}
        </div>
      </div>
      {/* <div className="hamburger">
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
            <Link to="/about">
              <p>About</p>
            </Link>
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
      </div> */}
      <ToastContainer />
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
