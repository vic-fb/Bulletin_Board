import React from 'react';
import './HomeView.css';
import NavDropdownMenu from '../components/NavDropdownMenu';

function HomeView({ classrooms, getOptionsCb, user }) {
  return (
    <div className="HomeView">
      <h1>Welcome to Bulletin Board!</h1>

      <p>{user && `Hi, ${user.first_name}!`}</p>
      <p>{user && user.role === 'teacher' && 'View a classroom from the menu below, or head to the Teacher Admin Hub to get started.'}</p>
      <p>{user && user.role === 'student' && 'Select an option from the menu above to get started.'}</p>
      {user && user.role === 'teacher' && (
      <div className="dropdown mx-auto">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Choose a classroom
        </a>

        <NavDropdownMenu
          classrooms={classrooms}
          getOptionsCb={getOptionsCb}
        />
      </div>
      )}
    </div>
  );
}

export default HomeView;
