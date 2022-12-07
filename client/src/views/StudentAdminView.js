import React from 'react';
import UpdateProjectForm from '../components/UpdateProjectForm';
import './StudentAdminView.css';

function StudentAdminView({ studentProjects, updateProjectCb }) {
  return (
    <div className="StudentAdminView">
      <h2>Update Your Project</h2>
      <h3>
        Replace all the information in the form below to post your latest
        project.
      </h3>

      <UpdateProjectForm
        studentProjects={studentProjects}
        updateProjectCb={updateProjectCb}
      />
    </div>
  );
}

export default StudentAdminView;
