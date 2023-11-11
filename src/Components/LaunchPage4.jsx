import React from "react";
import { Fade } from "react-reveal";
import Lp3Options1 from "./Lp3Options1";
import HorizontalScroll from "react-horizontal-scrolling";
import { images } from "../constants";
import Design5 from "../Design/Design5";
import "./LaunchPage4.css";
import { Link } from "react-router-dom";
import Products from "../Wardobe/Products";
function LaunchPage4() {
  return (
    <div className="launchPage4">
      <div className="lp3Opt">
        <h1>WHAT'S HOT ? </h1>
        <Fade bottom>
          <HorizontalScroll>
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
              <Lp3Options1
                image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/in-ss23-adimatic-hp-c-image_tcm209-1023154.jpg"
                title="Neighbhourhood x Adidas"
                desc="Comparing two streetware worlds "
                shop="Shop now"
              />
              <Lp3Options1
                image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/football-ss23-heatspawn-dotcom-glp-teaser-carousel-d_tcm209-1006650.jpg"
                title="Miss Nothing"
                desc="Unleash elite precision with Predator Accuracy in this new colored-up fireway"
                shop="Shop now"
              />
            </div>
          </HorizontalScroll>
        </Fade>
        <div className="Lp3Options2">
          <h1>WHO ARE YOU SHOPPING FOR ? </h1>
          <Fade bottom>
            <div className="Lp3Optd5">
              <Link to="/wardrobe">
                <Design5
                  image="https://media.discordapp.net/attachments/1059547728369156268/1113445744972673096/21d7ebd5-9cf7-4ca1-8b2e-998f734dde91.jpg?width=1184&height=1184"
                  text="MEN"
                />
              </Link>
              <Link to="/wardrobe">
                <Design5
                  image="https://media.discordapp.net/attachments/1059547728369156268/1113446526681890826/2767a6ea-186b-43a6-8d03-c4d6a3d68fff.jpg?width=1184&height=1184"
                  text="WOMEN"
                />
              </Link>
              <Link to="/wardrobe">
                <Design5
                  image="https://cdn.discordapp.com/attachments/1059547728369156268/1113447303865434143/60baa8c8-eeb0-4789-81e8-dd006b0e3664.jpg"
                  text="KIDS"
                />
              </Link>
            </div>
          </Fade>
        </div>
        <div className="best__sellers">
          <h1>Best Sellers</h1>
          <Fade left>
            <div className="cards">
              <Products
                id="1112"
                img1={images.Tshirt2_og}
                logo={images.adidas_logo}
                title="ADIDAS MenTypography"
                price={3899}
                rating={4}
              />
              <Products
                id="1115"
                img1={images.Hoodie1_og}
                logo={images.nike_logo}
                title="NIKE Men Full Sleeve Printed Hooded Sweatshirt"
                price={2399}
                rating={5}
              />
              <Products
                id="1119"
                img1={images.Pants1_og}
                logo={images.levis_log}
                title="LEVI'S 512 Men Tapered Fit Mid Rise"
                price={3099}
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
            </div>
          </Fade>
          <div className="offers">
            <h1>15% off on everything for orders above inr 2999</h1>
            <Fade left>
              <div className="cards">
                <Products
                  id="1242"
                  img1={images.Pants3_ed}
                  logo={images.puma_logo}
                  title="PUMA Men Regular, Slim, Tailored Fit"
                  price={2899}
                  rating={4}
                />
                <Products
                  id="1242"
                  img1={images.Shirt2_ed}
                  logo={images.puma_logo}
                  title="PUMA Men Regular, Slim, Tailored Fit"
                  price={2899}
                  rating={4}
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
                  img1={images.shoe1}
                  logo={images.puma_logo}
                  id="130"
                  title="PURE XT MEN'S TRAINING SHOES"
                  price={5000}
                  rating={5}
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchPage4;
