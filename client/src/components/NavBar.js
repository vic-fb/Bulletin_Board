import React from 'react';
import { NavLink } from 'react-router-dom';
import NavDropdownMenu from './NavDropdownMenu';

function NavBar({ user, classrooms, getOptionsCb }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
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
          {user.role === 'teacher' && (
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
          {user.role === 'teacher' && (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="teacher-admin">
                Teacher Admin
              </NavLink>
            </li>
          </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
