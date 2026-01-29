"use client";

import React, { useState } from "react";
import "./auth.css";

const AuthModal = ({ onClose }: { onClose: () => void }) => {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!phone || !password) {
      alert("Please enter phone and password");
      return;
    }

    const url =
      tab === "login"
        ? "/api/auth/login"
        : "/api/auth/signup";

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, password }),
    });

    const data = await res.json();

    alert(data.message);

    if (res.ok && tab === "login") {
      window.location.href = "/admin/faq";
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-box">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="auth-tabs">
          <button
            className={tab === "login" ? "active" : ""}
            onClick={() => setTab("login")}
          >
            Login
          </button>

          <button
            className={tab === "signup" ? "active" : ""}
            onClick={() => setTab("signup")}
          >
            Sign Up
          </button>
        </div>

        <input
          type="text"
          placeholder="Mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="submit-btn"
          onClick={handleSubmit}
        >
          {tab === "login" ? "Login" : "Create Account"}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
