import React, { useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

function UpdateProjectForm({ studentProjects, updateProjectCb }) {
  const { id } = useParams();

  const project = studentProjects.find((p) => p.id === Number(id));
  const userId = project.user_id;
  const classroomId = project.classroom_id;

  const EMPTY_FORM = {
    user_id: userId,
    title: project.title,
    description: project.description,
    image_url: project.image_url,
    project_url: project.project_url,
    classroom_id: classroomId,
    id,
  };

  const [projectFormData, setProjectFormData] = useState(EMPTY_FORM);
  const [toggleView] = useOutletContext();

  function handleChange(event) {
    const { value } = event.target;
    const { name } = event.target;

    setProjectFormData((state) => ({
      ...state,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateProjectCb(projectFormData);
    toggleView();
  }

  return (
    <div className="UpdateProjectForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Project Title
          <input
            type="text"
            name="title"
            value={projectFormData.title}
            onChange={(e) => handleChange(e)}
            required
          />
        </label>

        <label htmlFor="description">
          Project Description
          <textarea
            name="description"
            value={projectFormData.description}
            onChange={(e) => handleChange(e)}
            className="d-block w-100"
          />
        </label>

        <label htmlFor="image_url">
          Image Link
          <input
            type="url"
            name="image_url"
            value={projectFormData.image_url}
            onChange={(e) => handleChange(e)}
            required
          />
        </label>

        <label htmlFor="project_url">
          Project Link
          <input
            type="url"
            name="project_url"
            value={projectFormData.project_url}
            onChange={(e) => handleChange(e)}
            required
          />
        </label>

        <button type="submit" className="btn btn-info">
          Update Project
        </button>
      </form>
    </div>
  );
}

export default UpdateProjectForm;
