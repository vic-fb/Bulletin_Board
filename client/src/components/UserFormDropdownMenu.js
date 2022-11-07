import React, { useState, useEffect } from 'react';

function UserFormDropdownMenu(props) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const temp = generateOptions();
    setOptions(temp);
    props.getOptionsCb(options);
  }, [props.classrooms]); // call whenever classrooms changes

  /* had to create generateOptions() outside rendering statement b/c page was
    being drawn before classrooms was loaded, so had to create options state and
    useEffect function to make sure data was available before page was rendered */
  function generateOptions() {
    return props.classrooms.map((c) => (
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

  function handleAddUser(e) {
    props.userFormData.classroom_id = e.target.value;
  }

  return (
    <div className="UserFormDropdownMenu">
      <select
        className="form-select"
        aria-label="Default select example"
        id="classroom"
        name="classroom"
        onClick={handleAddUser}
      >
        <option selected />
        {options}
      </select>
    </div>
  );
}

export default UserFormDropdownMenu;
