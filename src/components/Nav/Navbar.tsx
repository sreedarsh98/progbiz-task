"use client";

import React, { useState } from "react";
import "./nav.css";
import Image from "next/image";
import logo from "../../../public/logo/logo.png";
import AuthModal from "../Auth/AuthModal";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="logo">
            <Image src={logo} alt="logo" />
          </div>

          <button
            className="admin-btn"
            onClick={() => setOpen(true)}
          >
            Admin Login
          </button>
        </div>
      </header>

      {open && <AuthModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
