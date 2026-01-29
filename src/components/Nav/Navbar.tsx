import React from "react";
import "./nav.css";
import Image from "next/image";
import logo from "../../../public/logo/logo.png"
const Navbar: React.FC = () => {
  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          {/* Logo */}
          <div className="logo">
            <Image src={logo}  alt="logo" />
          </div>

          {/* Right button */}
          <button className="admin-btn">Admin login</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
