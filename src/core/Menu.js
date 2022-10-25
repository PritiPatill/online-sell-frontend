import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";

import "../styles.css";

const Menu = () => {
  const navigate = useNavigate();
  return (
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
        {isAuthenticated()?.user?.role === 0 && (
          <li className="nav-item">
            <NavLink className="nav-link nav-color" to="/user/dashboard">
              User Dashboard
            </NavLink>
          </li>
        )}
        {isAuthenticated()?.user?.role === 1 && (
          <li className="nav-item">
            <NavLink className="nav-link nav-color" to="/admin/dashboard">
              Admin Dashboard
            </NavLink>
          </li>
        )}
        {!isAuthenticated() && (
          <>
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
          </>
        )}

        {isAuthenticated() && (
          <li className="nav-item">
            <span
              onClick={() => {
                signout(() => {
                  navigate("/");
                });
              }}
              className="nav-link text-warning"
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
