import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './StudentProjectInfo.css';

function StudentProjectInfo(props) {
  const { id } = useParams();

  // Use the student project ID from the URL to find the correct project (necessary until a login is created)
  const project = props.studentProjects.find((p) => p.id === Number(id));

  // Identify the user through the project's user_id property (necessary until a login function is created)
  const user = props.users.find((u) => u.id === project.user_id);

  if (props.users.length === 0 || project.length === 0) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="StudentProjectInfo">
      <div className="row">
        <Link
          to="update-project"
          class="btn btn-outline-warning mt-2 w-auto ms-auto me-3"
          role="button"
          onClick={props.toggleViewCb}
        >
          Display a New Project
        </Link>
      </div>

      <div className="mx-auto">
        <h2>
          Welcome to
          {user.first_name}
          's project page!
        </h2>

        <div className="grid">
          <div>
            <img alt={project.title} src={project.image_url} />
          </div>
          <div className="proj-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              className="btn btn-info"
              role="button"
              href={`${project.project_url}`}
              target="_blank"
              rel="noreferrer"
            >
              Check out my project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProjectInfo;
