// src/js/components/Navbar/Navbar.js
import React, { useState } from "react";
import { Link } from "@tata1mg/router";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div style={{ borderBottom: "2px solid white" }}>
      <div
        style={{
          width: "80%",
          marginLeft: "10%",
          paddingTop: "0.6%",
          paddingBottom: "0.6%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 32px",
          backgroundColor: "#E1FCE1",
        }}
      >
        <img
          src="assets/evently-logo.png"
          alt="Evently Logo"
          style={{ height: "50px" }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            style={{
              backgroundColor: "#28a745",
              border: "none",
              borderRadius: "4px",
              padding: "8px 16px",
              color: "white",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.2s ease-in-out",
            }}
            onClick={toggleModal}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
          >
            Join Evently
          </button>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#4CAF50" }}
          >
            About
          </Link>
        </div>
      </div>

      {modalOpen && (
        <div>
          <div
            onClick={toggleModal}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 10,
            }}
          ></div>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "32px",
              borderRadius: "8px",
              zIndex: 11,
              width: "300px",
              textAlign: "center",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Signup</p>
            <p style={{ margin: "8px 0", fontSize: "0.9rem" }}>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "12px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <hr style={{ margin: "16px 0" }} />
            <p style={{ fontSize: "0.75rem", color: "#555" }}>
              This site is protected by Google{" "}
              <span style={{ color: "#28a745" }}>Privacy Policy</span> and{" "}
              <span style={{ color: "#28a745" }}>Terms of Service</span> apply.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
