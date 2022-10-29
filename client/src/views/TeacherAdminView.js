import React, { useState , useEffect} from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
import AddClassroomForm from'../components/AddClassroomForm';
import AddUserForm from '../components/AddUserForm';
import UpdateAssignmentForm from '../components/UpdateAssignmentForm';

function TeacherAdminView(props) {
   
    return (
      <div className="TeacherAdminView">
        <h1>Teacher Admin Hub</h1>

        <h2>Start a new CLASSROOM</h2>
        
        <AddClassroomForm addClassroomCb={props.addClassroomCb}/>
        
        <h2>Add a new USER</h2>
        
        <AddUserForm 
          addUserCb={props.addUserCb} 
          options={props.options} 
          users={props.users}
          addInitialProjectCb={props.addInitialProjectCb}/>

        <h2>Update the ASSIGNMENT</h2>

        <UpdateAssignmentForm 
          updateAssignmentCb={props.updateAssignmentCb}
          options={props.options}/>
  
      </div>
    );
  }
  
  export default TeacherAdminView;

  // Think of new page name to reflect that teachers, classrooms, and students are being added/created