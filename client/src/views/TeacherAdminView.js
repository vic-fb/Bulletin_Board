import React, { useState , useEffect} from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
import AddClassroomForm from '../components/AddClassroomForm';


function TeacherAdminView(props) {
   
    
  
    return (
      <div className="TeacherAdminView">
        <h2>Fill out all the fields the form below to add a new classroom.</h2>
        
        <AddClassroomForm />
        
  
      </div>
    );
  }
  
  export default TeacherAdminView;