import React, { useState } from 'react';

function AddClassroomForm({ addClassroomCb }) {
  const EMPTY_FORM = {
    classroom_name: '',
    assignment_title: '',
    assignment_desc: '',
  };

  const [classroomFormData, setClassroomFormData] = useState(EMPTY_FORM);

  function handleChange(event) {
    const { value } = event.target;
    const { name } = event.target;

    setClassroomFormData((state) => ({
      ...state,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    addClassroomCb(classroomFormData);
    setClassroomFormData(EMPTY_FORM);
  }

  return (
    // upon log-in, user_id will be automatically collected
    <div className="AddTeacherForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="classroom_name">
          Classroom Name
          <input
            type="text"
            name="classroom_name"
            value={classroomFormData.classroom_name}
            onChange={(e) => handleChange(e)}
            required
          />
        </label>

        <label htmlFor="assignment_title">
          Assignment Title
          <input
            type="text"
            name="assignment_title"
            value={classroomFormData.assignment_title}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="assignment_desc">
          Assignment Description
          <textarea
            name="assignment_desc"
            value={classroomFormData.assignment_desc}
            onChange={(e) => handleChange(e)}
            className="d-block w-100"
          />
        </label>

        <button type="submit" className="btn btn-info d-block">
          Add Classroom
        </button>
      </form>
    </div>
  );
}

export default AddClassroomForm;
