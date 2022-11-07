import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavDropdownMenu({ classrooms, getOptionsCb }) {
  const [options, setOptions] = useState([]);

  /* had to create generateOptions() outside rendering statement b/c page was
   being drawn before classrooms was loaded, so had to create options state and
   useEffect function to make sure data was available before page was rendered */
  function generateOptions() {
    return classrooms.map(({ id, classroom_name: name }) => (
      <li key={id}>
        <Link
          className="dropdown-item"
          to={`/classrooms/${id}`}
          value={name}
        >
          {name}
        </Link>
      </li>
    ));
  }

  useEffect(() => {
    const temp = generateOptions();
    setOptions(temp);
    getOptionsCb(options);
  }, [classrooms]); // call whenever classrooms changes

  return (
    <div className="NavDropdownMenu">
      <ul className="dropdown-menu">{options}</ul>
    </div>
  );
}

export default NavDropdownMenu;
