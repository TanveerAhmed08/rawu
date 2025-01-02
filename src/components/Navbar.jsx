import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import "./navbar.css";
import Logo from "../images/logo.png";
import { links } from "../data";
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isNavshowing, setIsNavshowing] = useState(false);

  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={() =>{setIsNavshowing(false)} }>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav-links ${isNavshowing ? "show-nav" : "hide-nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavshowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav-toggle-btn"
          onClick={() => setIsNavshowing((prev) => !prev)}
        >
          {isNavshowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
