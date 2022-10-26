import React, { useContext } from "react";
import {   NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const Navbar = () => {
  const nagivate = useNavigate()
  
  const {dispatch} = useContext(AuthContext)

  const handleLogout = () => {
    dispatch({type: authTypes.logout})
    nagivate('/login', {replace: true})
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <NavLink className="navbar-brand text-white" to="/login">
              Dragon Ball App
            </NavLink>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link  ${isActive ? "text-dark" : "text-white"}`
                  }
                  aria-current="page"
                  to="/men"
                >
                  Men
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-dark" : "text-white"}`
                  }
                  aria-current="page"
                  to="/women"
                >
                  Women
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-dark" : "text-white"}`
                  }
                  aria-current="page"
                  to="/search"
                >
                  Search
                </NavLink>
              </li>
            </ul>
              <div className="d-flex">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </div>
          </div>
        </div> 
      </nav>
    </div>
  );
};

export default Navbar;
