import React from "react";
import "./Nav.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-container">
        <div className="logo-search">
          <h2 className="logo">
            F<span className="red">oo</span>dy Z<span className="red">o</span>ne
          </h2>
          <div className="search">
            <label type="text" name="search"></label>
            <input type="text" name="search" placeholder="Search Food..." />
          </div>
        </div>
        <ul className="nav-ul">
          <li>All</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
