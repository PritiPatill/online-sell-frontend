import React from "react";
import { NavLink } from "react-router-dom";

import "../styles.css"

const Menu = () => (
  <div>
    <ul className="nav nav-tabs bg-dark nav-color">
      <li className="nav-item">
        <NavLink className="nav-link nav-color" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link nav-color" to="/cart">
          Cart
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link nav-color" to="/user/dashboard">
          Dashboard
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link nav-color" to="/admin/dashboard">
          Admin Dashboard
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link nav-color" to="/signup">
          Signup
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link nav-color" to="/signin">
          Sign In
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link nav-color" to="/signout">
          Signout
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Menu;
