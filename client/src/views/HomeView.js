import React from 'react';
import './HomeView.css';
import NavDropdownMenu from '../components/NavDropdownMenu';

function HomeView({ classrooms, getOptionsCb, user }) {
  return (
    <div className="HomeView">
      <h1>Welcome to Bulletin Board!</h1>

      <p>{`Hi, ${user.first_name}!`}</p>
      <p>Choose an option from the menu below to get started.</p>
      <div className="dropdown mx-auto">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Choose an option
        </a>

        <NavDropdownMenu
          classrooms={classrooms}
          getOptionsCb={getOptionsCb}
        />
      </div>
    </div>
  );
}

export default HomeView;
