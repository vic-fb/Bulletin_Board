import React from "react";
// import { Link } from 'react-router-dom';
import UpdateProjectForm from "../components/UpdateProjectForm";
import "./StudentAdminView.css";

function StudentAdminView(props) {
  return (
    <div className="StudentAdminView">
      <h2>Update Your Project</h2>
      <h3>
        Replace all the information in the form below to post your latest
        project.
      </h3>

      <UpdateProjectForm
        toggleViewCb={props.toggleViewCb}
        studentProjects={props.studentProjects}
        updateProjectCb={props.updateProjectCb}
      />
    </div>
  );
}

export default StudentAdminView;
