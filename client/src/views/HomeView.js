import React from "react";
import "./HomeView.css";
import NavDropdownMenu from "../components/NavDropdownMenu";

function HomeView(props) {
  return (
    <div className="HomeView">
      <h1>Welcome to Bulletin Board!</h1>

      <p>Choose a classroom from the menu below to get started.</p>
      <div className="dropdown mx-auto">
        <a
          className="btn btn-info dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Choose a classroom
        </a>

        <NavDropdownMenu
          classrooms={props.classrooms}
          getOptionsCb={props.getOptionsCb}
        />
      </div>
    </div>
  );
}

export default HomeView;
