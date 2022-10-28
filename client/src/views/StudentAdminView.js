import React from 'react';
// import { Link } from 'react-router-dom';
import UpdateProjectForm from '../components/UpdateProjectForm';

function StudentAdminView(props) {
   
    
  
    return (
      <div className="StudentAdminView">
        <h2>Fill out all the fields the form below to post your latest project.</h2>
        
        <UpdateProjectForm 
            toggleViewCb={props.toggleViewCb} 
            studentProjects={props.studentProjects}
            updateProjectCb={props.updateProjectCb}
            />
        
  
      </div>
    );
  }
  
  export default StudentAdminView;
  