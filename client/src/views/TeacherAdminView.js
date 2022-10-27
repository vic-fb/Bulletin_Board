import React, { useState , useEffect} from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
import AddClassroomForm from '../components/AddClassroomForm';


function TeacherAdminView(props) {
   
    
  
    return (
      <div className="TeacherAdminView">
        <h2>Fill out all the fields the form below to add a NEW classroom.</h2>
        
        <AddClassroomForm />
        
        <h2>Fill out the form below to add a NEW student to an EXISTING classroom.</h2>
        
        {/* BELOW FORM NOT YET CREATED */}
        {/* <UpdateClassroomForm /> */}
  
      </div>
    );
  }
  
  export default TeacherAdminView;