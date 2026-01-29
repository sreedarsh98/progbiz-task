"use client";

import React from "react";

const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <h4>Admin Dashboard</h4>

      <button
        className="logout-btn"
        onClick={async () => {
          await fetch("/api/auth/logout", {
            method: "POST",
          });
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminNavbar;
