import React, { useState, useEffect } from 'react';

function UserFormDropdownMenu({ getOptionsCb, classrooms, userFormData }) {
  const [options, setOptions] = useState([]);

  /* had to create generateOptions() outside rendering statement b/c page was
      being drawn before classrooms was loaded, so had to create options state and
      useEffect function to make sure data was available before page was rendered */
  function generateOptions() {
    return classrooms.map((c) => (
      <option
        className="dropdown-item"
        key={c.id}
        name="classroom_id"
        value={c.id}
      >
        {c.classroom_name}
      </option>
    ));
  }

  useEffect(() => {
    const temp = generateOptions();
    setOptions(temp);
    getOptionsCb(options);
  }, [classrooms]); // call whenever classrooms changes

  function handleAddUser(e) {
    userFormData.classroom_id = e.target.value;
  }

  return (
    <div className="UserFormDropdownMenu">
      <select
        className="form-select"
        aria-label="Default select example"
        id="classroom"
        name="classroom"
        onClick={handleAddUser}
        required
      >
        <option value="" selected disabled>Select a classroom</option>
        {options}
      </select>
    </div>
  );
}

export default UserFormDropdownMenu;
