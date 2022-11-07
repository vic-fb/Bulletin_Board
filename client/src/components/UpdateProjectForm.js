import React, { useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

function UpdateProjectForm(props) {
  const { id } = useParams();

  const project = props.studentProjects.find((p) => p.id === Number(id));
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
    props.updateProjectCb(projectFormData);
    toggleView();
  }

  return (
    // upon log-in, user_id & classroom_id will be automatically collected
    <div className="UpdateProjectForm">
      <form onSubmit={handleSubmit}>
        <label>
          Project Title
          <input
            type="text"
            name="title"
            value={projectFormData.title}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Project Description
          <textarea
            type="text"
            name="description"
            value={projectFormData.description}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Image Link
          <input
            type="url"
            name="image_url"
            value={projectFormData.image_url}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Project Link
          <input
            type="url"
            name="project_url"
            value={projectFormData.project_url}
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

export default UpdateProjectForm;
