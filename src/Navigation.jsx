import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

const Navigation = ({ menuItems, brand }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top py-5">
        <div className="container">
          <NavLink className="navbar-brand text-white fw-bold" to="/">
            {brand}
          </NavLink>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <i className="bi bi-list text-white fs-2"></i>
          </button>

          <div className="d-none d-lg-flex ms-auto">
            <ul className="navbar-nav gap-4">
              {menuItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link text-white ${
                        isActive ? "fw-bold text-primary" : ""
                      }`
                    }
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 id="mobileMenuLabel" className="fw-bold mb-0">
            {brand}
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body bg-white">
          <ul className="navbar-nav">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-dark ${
                      isActive ? "fw-bold text-primary" : ""
                    }`
                  }
                  to={item.path}
                  data-bs-dismiss="offcanvas"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
