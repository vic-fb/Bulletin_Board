import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateAssignmentForm(props) {
  const navigate = useNavigate();

  const [assignmentFormData, setAssignmentFormData] = useState([]);
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
      <option className="dropdown-item" key={c.id} name="id" value={c.id}>
        {c.classroom_name}
      </option>
    ));
  }

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
    props.updateAssignmentCb(assignmentFormData);
    navigate(`/classrooms/${assignmentFormData.id}`);
  }

  return (
    <div className="UpdateAssignmentForm">
      <form onSubmit={handleSubmit}>
        <div className="dropdown">
          <label>Select a Classroom</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="classroom"
            name="id"
            onClick={handleClick}
          >
            <option selected />
            {options}
          </select>
        </div>

        <label>
          Assignment Title
          <input
            type="text"
            name="assignment_title"
            value={assignmentFormData.assignment_title}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Assignment Description
          <textarea
            type="text"
            name="assignment_desc"
            value={assignmentFormData.assignment_desc}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <button type="submit" className="btn btn-info">
          Update Project
        </button>
      </form>
    </div>
  );
}

export default UpdateAssignmentForm;
