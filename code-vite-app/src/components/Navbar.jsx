import React from "react";
import CartWidget from "../components/CartWidget";
import "../assets/styles/styles.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/perros" activeclassname="active">
            Perros
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/gatos" activeclassname="active">
            Gatos
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeclassname="active">
            Carrito
            <CartWidget />
            <span>5</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
