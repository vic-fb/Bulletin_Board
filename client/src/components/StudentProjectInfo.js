import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './StudentProjectInfo.css';

function StudentProjectInfo({
  toggleViewCb, studentProjects, user, users,
}) {
  const { id } = useParams(); // project_id
  if (!studentProjects.length) {
    return <h2>Loading</h2>;
  }
  const project = studentProjects.find((p) => p.id === Number(id));
  const owner = users.find((u) => u.id === Number(project.user_id));

  return (
    <div className="StudentProjectInfo">
      <div className="row">
        {project.user_id === user.id && (
        <Link
          to="update-project"
          className="btn btn-outline-warning mt-2 w-auto ms-auto me-3"
          role="button"
          onClick={toggleViewCb}
        >
          Display a New Project
        </Link>
        )}
      </div>

      <div className="mx-auto">
        <h2>
          {`Welcome to ${owner.first_name}'s project page!`}
        </h2>
        {!project.title && <h3>No project added yet</h3>}
        <div className="grid">
          <div>
            {project.image_url && <img alt={project.title} src={project.image_url} />}
          </div>
          { project.title
            && (
              <div className="proj-info align-middle">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  className="btn btn-secondary"
                  role="button"
                  href={`${project.project_url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Check out my project
                </a>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default StudentProjectInfo;
