import React from "react";
import bg from "../assets/workcity.jpg";

export default function Home() {
  return (
    <div
      className="home-hero position-relative w-100"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        className="overlay position-absolute top-0 start-0 w-100 h-100"
        style={{ background: "rgba(0,0,0,0.5)", zIndex: 1 }}
      ></div>
      <div
        className="container position-relative d-flex flex-column justify-content-center align-items-center"
        style={{ zIndex: 2, minHeight: "100vh" }}
      >
        <div className="row justify-content-center w-100">
          <div className="col-lg-8 text-center text-white animate__animated animate__fadeInDown">
            <h1
              className="display-4 fw-bold mb-3"
              style={{
                letterSpacing: "2px",
                textShadow: "0 2px 16px rgba(0,0,0,0.25)",
              }}
            >
              Welcome to <span className="text-primary">WorkCity</span>
            </h1>
            <p
              className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.18)" }}
            >
              Manage your clients and projects with ease. Fast, secure, and
              beautiful.
            </p>
            <a
              href="/signup"
              className="btn btn-lg btn-light shadow px-5 animate__animated animate__fadeInUp animate__delay-2s fw-bold"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <style>{`
        body, html, #root {
          height: 100vh !important;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        .navbar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          z-index: 10;
          background: transparent !important;
        }
        .navbar .navbar-brand, .navbar .nav-link, .navbar .btn {
          color: #fff !important;
          text-shadow: 0 2px 8px rgba(0,0,0,0.18);
        }
      `}</style>
    </div>
  );
}
