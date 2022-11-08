import { useState } from 'react';
import UserFormDropdownMenu from './UserFormDropdownMenu';

function AddUserForm({ addUserCb, classrooms, getOptionsCb }) {
  const EMPTY_FORM = {
    first_name: '',
    last_name: '',
    email: '',
    role: 'student',
    classroom_id: null,
  };

  const [userFormData, setUserFormData] = useState(EMPTY_FORM);
  const [showSuccess, setShowSuccess] = useState(false);

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
    addUserCb(userFormData);
    setShowSuccess(true);
    setUserFormData(EMPTY_FORM);
  }

  return (
    <div className="AddUserForm">
      <form onSubmit={handleSubmit}>
        <div className="dropdown">
          <label>
            Classroom
            <UserFormDropdownMenu
              userFormData={userFormData}
              getOptionsCb={getOptionsCb}
              classrooms={classrooms}
            />
          </label>
        </div>
        <label htmlFor="first_name">
          First Name
          <input
            type="text"
            name="first_name"
            required
            value={userFormData.first_name}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="last_name">
          Last Name
          <input
            type="text"
            name="last_name"
            value={userFormData.last_name}
            required
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={userFormData.email}
            required
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit" className="btn btn-info d-block">
          Add Student
        </button>
      </form>
      {showSuccess && (
      <div className="alert alert-success mt-4" role="alert">
        New student added
      </div>
      )}
    </div>
  );
}

export default AddUserForm;
