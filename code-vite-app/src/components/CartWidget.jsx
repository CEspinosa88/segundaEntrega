import React from "react";
import cartIcon from "../assets/icons/cartIcon.svg";

const CartWidget = () => {
  return (
    <>
      <img src={cartIcon} style={{ height: 20, width: 20 }} />
    </>
  );
};

export default CartWidget;
