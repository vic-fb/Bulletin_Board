import React from 'react';
import { NavLink } from 'react-router-dom';
import NavDropdownMenu from './NavDropdownMenu';

function NavBar({
  user, classrooms, getOptionsCb, onLogout,
}) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand nav-link" to="/">
          Bulletin Board
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {user && user.role === 'teacher' && (
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown me-auto my-auto">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Classrooms
              </a>
              <NavDropdownMenu
                classrooms={classrooms}
                getOptionsCb={getOptionsCb}
              />
            </li>
          </ul>
          )}
          {user && (
          <ul className="navbar-nav ms-auto">
            {user.role === 'teacher'
              && (
              <li className="nav-item">
                <NavLink className="nav-link" to="teacher-admin">
                  Teacher Admin
                </NavLink>
              </li>
              )}
            <li className="nav-item">
              <button className="btn btn-light" type="button" onClick={onLogout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </button>
            </li>
          </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
