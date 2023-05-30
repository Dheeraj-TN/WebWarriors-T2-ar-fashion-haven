import React from "react";
import Header from "../Components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Wardrobe.css";
import { Fade } from "react-reveal";
import Lp3Options1 from "../Components/Lp3Options1";
import Card2 from "../Cards/Card2";
import Card from "../Cards/Card1";
import Card3 from "../Cards/Card3";
import Card4 from "../Cards/Card4";
import Card6 from "../Cards/Card6";
import Card7 from "../Cards/Card7";
import Card8 from "../Cards/Card8";
import Card5 from "../Cards/Card5";
import Card10 from "../Cards/Card10";
import Card11 from "../Cards/Card11";
import Card9 from "../Cards/Card9";
import Card12 from "../Cards/Card12";
import Card13 from "../Cards/Card13";
import Card14 from "../Cards/Card14";

function Wardrobe() {
  return (
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

          <Fade bottom>
            <div className="lp3Options">
              <Lp3Options1
                image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/football-ss23-arsenal-home-onsite-tcc_tcm209-1023874.jpg"
                title="Collabration Archieve with Adidas"
                desc="Upto 50% off on collbration"
                shop="Shop now"
              />
              <Lp3Options1
                image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/IN-SAMBA-HP-TC_tcm209-989397.jpg"
                title="Samba"
                desc="The legacy lives on"
                shop="Shop now"
              />
              <Lp3Options1
                image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/ss23-gucci-launch-non-confirmed-hp-tc-d_tcm209-1008683.jpg"
                title="GUCCI"
                desc="Sartorial streetware meets sportware as icons of Gucci nite"
                shop="Shop now"
              />
            </div>
          </Fade>
          <div className="trending__now">
            <h1>Explore our Closet</h1>
            <a href="http://localhost:5173/">
              <button>AR Room</button>
            </a>
          </div>
        </div>
        <div className="tshirt__tag">
          <h1 className="cloth__tag">Tshirts and Shirts</h1>
          <div className="tshirt">
            <Card />
            <Card2 />
            <Card3 />
            <Card />
          </div>
          <div className="tshirt">
            <Card11 />
            <Card12 />
            <Card13 />
            <Card14 />
          </div>
        </div>
        <div className="hoodie__tag">
          <h1 className="cloth__tag">SweatShirts</h1>
          <div className="tshirt">
            <Card4 />
            <Card5 />
            <Card6 />
            <Card7 />
          </div>
        </div>
        <div className="hoodie__tag">
          <h1 className="cloth__tag">Pants</h1>
          <div className="tshirt">
            <Card8 />
            <Card9 />
            <Card10 />
            <Card8 />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Wardrobe;
