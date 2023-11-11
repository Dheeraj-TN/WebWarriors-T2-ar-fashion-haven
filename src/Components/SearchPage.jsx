import React, { useState } from "react";
import { data } from "../Data";
import Products from "../Wardobe/Products";
import Header from "./Header";

function SearchPage(props) {
  const searchItem = sessionStorage.getItem("searchItem");
  return (
    <div>
      <Header />
      <h2>Here are the results that matches for your Search</h2>
      <div
        className="template__container"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {console.log(searchItem)}

        {data.map((item, index) => {
          if (item.title.toLowerCase().includes(searchItem))
            return (
              <div className="home__row">
                <Products
                  title={item.title}
                  img1={item.img1}
                  logo={item.logo}
                  price={item.price}
                  rating={item.rating}
                />
              </div>
            );
          return "";
        })}
      </div>
    </div>
  );
}

export default SearchPage;
