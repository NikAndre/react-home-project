import React from "react";
import Product from "../product/product";
import propTypes from "prop-types";
import Cart from "../cart/cart";
import "../../Styles.css";

export default function Menu({ menu }) {
  return (
    <div className={"block-wrapper"}>
      <div className={"menu-block"}>
        <h1>Menu</h1>
        {menu.map((id) => {
          return <Product key={id} id={id} />;
        })}
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
}

Menu.propTypes = {
  menu: propTypes.array.isRequired,
};
