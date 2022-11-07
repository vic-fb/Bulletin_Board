import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserFormDropdownMenu from './UserFormDropdownMenu';

function AddUserForm(props) {
  const EMPTY_FORM = {
    first_name: '',
    last_name: '',
    role: '',
    classroom_id: null,
  };

  const [userFormData, setUserFormData] = useState(EMPTY_FORM);
  const navigate = useNavigate();

  function handleChange(event) {
    const { value } = event.target;
    const { name } = event.target;

    setUserFormData((state) => ({
      ...state,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addUserCb(userFormData);
    setUserFormData(EMPTY_FORM);
    navigate(`/classrooms/${userFormData.classroom_id}`);
  }

  return (
    <div className="AddUserForm">
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="first_name"
            value={userFormData.first_name}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            name="last_name"
            value={userFormData.last_name}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>Role</label>
        <label className="radio-button">
          <input
            className="radio-button-input"
            type="radio"
            name="role"
            value="teacher"
            checked={userFormData.role === 'teacher'}
            onChange={(e) => handleChange(e)}
          />
          Teacher
        </label>
        <label className="radio-button">
          <input
            className="radio-button-input"
            type="radio"
            name="role"
            value="student"
            checked={userFormData.role === 'student'}
            onChange={(e) => handleChange(e)}
          />
          Student
        </label>

        <div className="dropdown">
          <label>Select a Classroom</label>
          <UserFormDropdownMenu
            userFormData={userFormData}
            getOptionsCb={props.getOptionsCb}
            classrooms={props.classrooms}
          />
        </div>

        <button type="submit" className="btn btn-info">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUserForm;
