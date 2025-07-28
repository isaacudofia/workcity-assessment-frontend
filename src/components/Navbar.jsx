import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { removeToken, getToken } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!getToken();

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4 py-2">
      <div className="container">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            fontSize: "2rem",
            letterSpacing: "2px",
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            textShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          WorkCity
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/clients">
                    Clients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-light btn-sm ms-lg-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
