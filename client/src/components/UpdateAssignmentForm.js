import { useState, useEffect } from 'react';

function UpdateAssignmentForm({ classrooms, updateAssignmentCb, getOptionsCb }) {
  const [assignmentFormData, setAssignmentFormData] = useState([]);
  const [options, setOptions] = useState([]);
  function generateOptions() {
    return classrooms.map((c) => (
      <option className="dropdown-item" key={c.id} name="id" value={c.id}>
        {c.classroom_name}
      </option>
    ));
  }

  useEffect(() => {
    const temp = generateOptions();
    setOptions(temp);
    getOptionsCb(options);
  }, [classrooms]); // call whenever classrooms changes

  /* had to create generateOptions() outside rendering statement b/c page was
    being drawn before classrooms was loaded, so had to create options state and
    useEffect function to make sure data was available before page was rendered */

  function handleChange(event) {
    const { value } = event.target;
    const { name } = event.target;

    setAssignmentFormData((state) => ({
      ...state,
      [name]: value,
    }));
  }

  function handleClick(e) {
    assignmentFormData.id = e.target.value;
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateAssignmentCb(assignmentFormData);
  }

  return (
    <div className="UpdateAssignmentForm">
      <form onSubmit={handleSubmit}>
        <div className="dropdown">
          <label htmlFor="classroom">
            Classroom
            <select
              className="form-select"
              aria-label="Default select example"
              id="classroom"
              name="id"
              onClick={handleClick}
              required
              defaultValue=""
            >
              <option value="" disabled>Select a classroom</option>
              {options}
            </select>
          </label>
        </div>

        <label htmlFor="assignment_title">
          Assignment Title
          <input
            type="text"
            name="assignment_title"
            value={assignmentFormData.assignment_title}
            onChange={(e) => handleChange(e)}
            required
          />
        </label>

        <label htmlFor="assignment_desc">
          Assignment Description
          <textarea
            name="assignment_desc"
            id="assignment_desc"
            value={assignmentFormData.assignment_desc}
            onChange={(e) => handleChange(e)}
            className="d-block w-100"
          />
        </label>

        <button type="submit" className="btn btn-info d-block">
          Update Assignment
        </button>
      </form>
    </div>
  );
}

export default UpdateAssignmentForm;
