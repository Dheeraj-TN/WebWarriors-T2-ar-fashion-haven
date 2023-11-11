import React from "react";
import Header from "../Components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Wardrobe.css";
import { Link } from "react-router-dom";
import Products from "./Products";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { images } from "../constants";
import { Fade } from "react-reveal";
import Footer from "../Components/Footer";
import { useStateValue } from "../StateProvider";
import Login from "../Authentication/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Wardrobe() {
  const [{ basket, user }, dispatch] = useStateValue();
  const msg = () => toast.warning("Login to continue..");
  return (
    <>
      {!user?.email ? (
        (msg(), (<Login />))
      ) : (
        <div className="wardrobe">
          <Header />
          <Fade left>
            <div className="banner">
              <Carousel
                autoPlay
                infinteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000}
              >
                <div className="carousel">
                  <img
                    className="home__image"
                    loading="lazy"
                    src="https://dutchuncles.in/wp-content/uploads/2021/02/Tech-trends-to-rule-in-fashion-e-commerce-feature-01.jpg"
                    alt=""
                  />
                </div>
                <div className="carousel">
                  <img
                    className="home__image"
                    loading="lazy"
                    src="https://www.shutterstock.com/image-photo/try-virtual-fashion-watch-wristwatch-260nw-2273610507.jpg"
                    alt=""
                  />
                </div>
                <div className="carousel">
                  <img
                    className="home__image"
                    loading="lazy"
                    src="https://www.shutterstock.com/image-photo/cloth-shopping-using-ar-trying-260nw-2028661898.jpg"
                    alt=""
                  />
                </div>
                <div className="carousel">
                  <img
                    className="home__image"
                    loading="lazy"
                    src="https://miro.medium.com/v2/resize:fit:660/0*wmL0_GNe0QVffjIv.jpg"
                    alt=""
                  />
                </div>
                <div className="carousel">
                  <img
                    className="home__image"
                    loading="lazy"
                    src="https://i0.wp.com/zivost.com/wp-content/uploads/2022/01/wanna-kicks-augmented-reality-1024x513-1.png?resize=1024%2C513&ssl=1"
                    alt=""
                  />
                </div>
                <div className="carousel">
                  <img
                    className="home__image"
                    loading="lazy"
                    src="https://techcrunch.com/wp-content/uploads/2022/04/Puma-AR-Shopping-Still.png?w=1024"
                    alt=""
                  />
                </div>
              </Carousel>
              <Fade left>
                <div className="shoes">
                  <div className="grad" />
                  <div className="shoes__left">
                    <h1>YEEZY</h1>
                    <h2>AVAILABLE NOW</h2>
                    <button>
                      SHOP NOW <ArrowRightAltIcon />
                    </button>
                  </div>

                  <div className="shoes__right">
                    <img
                      src="https://assets.adidas.com/images/w_840,h_840,q_auto:sensitive/3f30703f195a4333aa3b9fc125b58b05_9366/HQ4540_01_standard.jpg"
                      alt=""
                    />
                    <img
                      src="https://assets.adidas.com/images/w_840,h_840,q_auto:sensitive/2066c8823f7c4207a61d420b419f8f95_9366/HQ7045_01_standard.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </Fade>
              <div className="trending__now">
                <h1>Explore our Closet</h1>
                {/* <a href="http://localhost:5173/">
                  <button id="ARbutton">AR Room</button>
                </a> */}
              </div>
            </div>
            <div className="tshirt__tag">
              <h1 className="cloth__tag">Tshirts and Shirts</h1>
              <div className="tshirt">
                <Products
                  id="1111"
                  img1={images.Tshirt2_ed}
                  logo={images.adidas_logo}
                  title="ADIDAS MasterClass"
                  price={899}
                  rating={4}
                />
                <Products
                  id="1112"
                  img1={images.Tshirt2_og}
                  logo={images.adidas_logo}
                  title="ADIDAS MenTypography"
                  price={3899}
                  rating={4}
                />
                <Products
                  id="1113"
                  img1={images.Tshirt3_og}
                  logo={images.adidas_logo}
                  title="ADIDAS Men Solid Round neck cotton blend"
                  price={1899}
                  rating={4}
                />
                <Products
                  id="1114"
                  img1={images.Tshirt2_og}
                  logo={images.adidas_logo}
                  title="ADIDAS MenTypography"
                  price={3899}
                  rating={4}
                />
              </div>
              <div className="tshirt">
                <Products
                  id="1231"
                  img1={images.Shirt1_og}
                  logo={images.puma_logo}
                  title="PUMA Washed Cut Away Collar Casual Shirt"
                  price={3999}
                  rating={5}
                />
                <Products
                  id="1242"
                  img1={images.Shirt2_og}
                  logo={images.puma_logo}
                  title="PUMA Men Regular, Slim, Tailored Fit"
                  price={2899}
                  rating={4}
                />
                <Products
                  id="1253"
                  img1={images.Tshirt3_ed}
                  logo={images.adidas_logo}
                  title="ADIDAS Men Solid Round neck cotton blend"
                  price={1899}
                  rating={4}
                />
                <Products
                  id="1114"
                  img1={images.Tshirt2_ed}
                  logo={images.adidas_logo}
                  title="ADIDAS MenTypography"
                  price={3899}
                  rating={4}
                />
              </div>
            </div>
            <div className="hoodie__tag">
              <h1 className="cloth__tag">SweatShirts</h1>
              <div className="tshirt">
                <Products
                  id="1115"
                  img1={images.Hoodie1_og}
                  logo={images.nike_logo}
                  title="NIKE Men Full Sleeve Printed Hooded Sweatshirt"
                  price={2399}
                  rating={5}
                />
                <Products
                  id="1116"
                  img1={images.Hoodie2_og}
                  logo={images.nike_logo}
                  title="NIKE Men Full Sleeve Printed Hooded Sweatshirt"
                  price={899}
                  rating={3}
                />
                <Products
                  id="1117"
                  img1={images.Hoodie3_og}
                  logo={images.nike_logo}
                  title="NIKE Men Full Sleeve Printed Hooded Sweatshirt"
                  price={8559}
                  rating={5}
                />
                <Products
                  id="1118"
                  img1={images.Hoodie4_og}
                  logo={images.puma_logo}
                  title="PUMA Men Full Sleeve Printed Hooded Sweatshirt"
                  price={499}
                  rating={3}
                />
              </div>
            </div>
            <div className="hoodie__tag">
              <h1 className="cloth__tag">Pants</h1>
              <div className="tshirt">
                <Products
                  id="1119"
                  img1={images.Pants1_og}
                  logo={images.levis_log}
                  title="LEVI'S 512 Men Tapered Fit Mid Rise"
                  price={3099}
                  rating={5}
                />
                <Products
                  id="1120"
                  img1={images.Pants2_og}
                  logo={images.levis_log}
                  title="LEVI'S Men Slim Mid Rise <"
                  price={2699}
                  rating={4}
                />
                <Products
                  id="1121"
                  img1={images.Pants3_og}
                  logo={images.levis_log}
                  title="LEVI'S Men Solid Green Track Pants"
                  price={1499}
                  rating={3}
                />
                <Products
                  id="1122"
                  img1={images.Pants1_ed}
                  logo={images.levis_log}
                  title="LEVI'S 512 Men Tapered Fit Mid Rise"
                  price={1499}
                  rating={4}
                />
              </div>
              <div className="hoodie__tag">
                <h1 className="cloth__tag">Kids</h1>
                <div className="tshirt">
                  <Products
                    img1={images.kids1}
                    logo={images.puma_logo}
                    id="123"
                    title="Puma kid's Typography"
                    price={2000}
                    rating={5}
                  />

                  <Products
                    img1={images.kids2}
                    logo={images.puma_logo}
                    id="124"
                    title="Kid's summer wear"
                    price={1000}
                    rating={4}
                  />

                  <Products
                    img1={images.kids3}
                    logo={images.puma_logo}
                    id="125"
                    title="Children"
                    price={2000}
                    rating={5}
                  />

                  <Products
                    img1={images.kids4}
                    logo={images.puma_logo}
                    id="126"
                    title="The right size matters"
                    price={2700}
                    rating={5}
                  />
                </div>
              </div>
              <div className="hoodie__tag">
                <h1 className="cloth__tag">Women</h1>
                <div className="tshirt">
                  <Products
                    img1={images.women1}
                    logo={images.puma_logo}
                    id="127"
                    title="Women Typography"
                    price={1000}
                    rating={3}
                  />

                  <Products
                    img1={images.women4}
                    logo={images.puma_logo}
                    id="128"
                    title="PUMA Women Jeans"
                    price={1500}
                    rating={4}
                  />

                  <Products
                    img1={images.women5}
                    logo={images.puma_logo}
                    id="129"
                    title="WoMen Typography"
                    price={2000}
                    rating={5}
                  />

                  <Products
                    img1={images.women6}
                    logo={images.puma_logo}
                    id="123"
                    title="Women Jeans"
                    price={500}
                    rating={2}
                  />
                </div>
              </div>
              <div className="hoodie__tag">
                <h1 className="cloth__tag">Shoes</h1>
                <div className="tshirt">
                  <Products
                    img1={images.shoe1}
                    logo={images.puma_logo}
                    id="130"
                    title="PURE XT MEN'S TRAINING SHOES"
                    price={5000}
                    rating={5}
                  />

                  <Products
                    img1={images.shoe2}
                    logo={images.nike_logo}
                    id="131"
                    title="Fuse 2.0 Men's Training shoes"
                    price={9000}
                    rating={5}
                  />

                  <Products
                    img1={images.shoe3}
                    logo={images.puma_logo}
                    id="132"
                    title="Cell Vive Running shoes"
                    price={4000}
                    rating={4}
                  />

                  <Products
                    img1={images.shoe4}
                    logo={images.puma_logo}
                    id="133"
                    title="Cell Pro Running shoes"
                    price={4000}
                    rating={5}
                  />
                </div>
              </div>
              <div className="hoodie__tag">
                <div className="tshirt">
                  <Products
                    img1={images.shoe5}
                    logo={images.adidas_logo}
                    id="134"
                    title="Gazelle Shoes"
                    price={5000}
                    rating={5}
                  />

                  <Products
                    img1={images.shoe6}
                    logo={images.nike_logo}
                    id="135"
                    title="Air Sports Shoe"
                    price={2000}
                    rating={3}
                  />

                  <Products
                    img1={images.shoe7}
                    logo={images.adidas_logo}
                    id="136"
                    title="Ultraboost Running Shoes"
                    price={6200}
                    rating={5}
                  />
                  <Products
                    img1={images.shoe1}
                    logo={images.puma_logo}
                    id="130"
                    title="PURE XT MEN'S TRAINING SHOES"
                    price={5000}
                    rating={5}
                  />
                </div>
              </div>
            </div>
          </Fade>
          <Footer />
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default Wardrobe;
