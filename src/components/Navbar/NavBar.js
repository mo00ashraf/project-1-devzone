import React from "react";
import "../Navbar/Navbar.css";
const NavBar = () => {
  return (
    <>
      <div className="Navbar">
        <a href="@" className="logo">
          mo salah
        </a>
        <ul className="d-flex p-1 m-1">
          <li className="list-style-none">
            <a href="@">Home</a>
          </li>
          <li>
            <a href="@">About</a>
          </li>
          <li>
            <a href="@">Contact Us</a>
          </li>
          <li>
            <a href="@">Call</a>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default NavBar;
