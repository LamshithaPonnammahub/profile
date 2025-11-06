import React from "react";

export default function NavbarComp() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 px-4">
      <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
        <span className="logo-box me-2">h</span>
        <span className="text-purple">hobbycue</span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
        aria-controls="navMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navMenu">
        <div className="d-flex align-items-center ms-3">
          <input
            className="form-control me-2 search-input"
            type="search"
            placeholder="Search here..."
          />
          <button className="btn btn-purple">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <ul className="navbar-nav ms-auto align-items-lg-center gap-3">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-dark"
              href="/#"
              id="exploreDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Explore
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">People – Community</a></li>
              <li><a className="dropdown-item" href="#">Places – Venues</a></li>
              <li><a className="dropdown-item" href="#">Programs – Events</a></li>
              <li><a className="dropdown-item" href="#">Products – Store</a></li>
              <li><a className="dropdown-item" href="#">Blogs</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-dark"
              href="/#"
              id="hobbiesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hobbies
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Music</a></li>
              <li><a className="dropdown-item" href="#">Dance</a></li>
              <li><a className="dropdown-item" href="#">Sports</a></li>
              <li><a className="dropdown-item" href="#">Art</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-bell"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-cart"></i></a>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-purple px-4">Sign In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
