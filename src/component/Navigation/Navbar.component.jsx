import React from "react";
import "../css/bootstrap.min.css";
import "../js/bootstrap.min.js";
import "../js/jquery.min.js";
import "../js/popper.min.js";

const Nav = () => {
  return (
    <nav className="navbar navbar-light s">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn  my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="navbar-brand" href="#">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="navbar-brand" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="navbar-brand dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
