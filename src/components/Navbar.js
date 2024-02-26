import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [text, settext] = useState("");

  async function updateText(e) {
    settext(e.target.value);
  }

  async function handleSearch() {
    window.location.href = `https://www.google.com/search?q=${text}`;
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-tertiary"
      style={{
        backgroundColor: "#008000",
        border: "3px solid white",
        borderRadius: "7px",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand " to="/" style={{ color: "white" }}>
          <img
            src="favicon.png"
            alt="error"
            style={{ width: "20px", marginRight: "4px" }}
          ></img>
          Niranjana
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/About" style={{ color: "white" }}>
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                style={{ color: "white" }}
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul
                className="dropdown-menu"
                style={{ backgroundColor: "#008000" }}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/Login"
                    style={{ color: "white" }}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/Signup"
                    style={{ color: "white" }}
                  >
                    Signup
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/Contact"
                    style={{ color: "white" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={updateText}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={handleSearch}
              style={{ color: "white", border: "2px solid white" }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
