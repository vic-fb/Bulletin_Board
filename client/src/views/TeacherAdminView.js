import React, { useState , useEffect} from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
import AddClassroomForm from '../components/AddClassroomForm';
import AddStudentForm from '../components/AddStudentForm';

function TeacherAdminView(props) {
   
    return (
      <div className="TeacherAdminView">
        <h1>Teacher Admin Hub</h1>

        <h2>Fill out all the fields the form below to add a new CLASSROOM.</h2>
        
        <AddClassroomForm />
        
        <h2>Fill out the form below to add a new student to your classroom.</h2>
        
        <AddStudentForm />
  
      </div>
    );
  }
  
  export default TeacherAdminView;