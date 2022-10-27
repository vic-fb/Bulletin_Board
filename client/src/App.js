import React, { useState , useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';
import ClassroomView from './views/ClassroomView';
import StudentProjectView from './views/StudentProjectView';
import StudentAdminView from './views/StudentAdminView';
import TeacherAdminView from './views/TeacherAdminView';


function App() {
  let [users, setUsers] = useState([]);
  let [classrooms, setClassrooms] = useState([]);
  let [studentProjects, setStudentProjects] = useState([]);

  useEffect(() => {
    getUsers();
    getClassrooms();
    getProjects();
  }, []);

  const getUsers = () => {
    fetch('/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json);
      })
    .catch(error => {
      console.log(error.message);
    });
  };

  const getClassrooms = () => {
    fetch('/classrooms')
      .then(res => res.json())
      .then(json => {
        setClassrooms(json);
      })
    .catch(error => {
      console.log(error.message);
    });
  };

  const getProjects = () => {
    fetch('/student-projects')
      .then(res => res.json())
      .then(json => {
        setStudentProjects(json);
      })
    .catch(error => {
      console.log(error.message);
    });
  };

  
  const addNewProject = (newProject) => {
    let postOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newProject)
    }
    
    let putOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newProject)
    }

    let user = studentProjects.find(p => p.user_id === newProject.user_id)
    
    if(user) {
      fetch('/student-projects', putOptions)
        .then(res => res.json())
        .then(json => {
          setStudentProjects(json);
        })
      .catch(error => {
        console.log(error.message);
      });
    } else {
      fetch('/student-projects', postOptions)
        .then(res => res.json())
        .then(json => {
          setStudentProjects(json);
        })
      .catch(error => {
        console.log(error.message);
      });
    } 
  }

  const addNewClassroom = (newClassroom) => {
    let postOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newClassroom)
    }
 
      fetch('/student-projects', postOptions)
        .then(res => res.json())
        .then(json => {
          setClassrooms(json);
        })
      .catch(error => {
        console.log(error.message);
      });  
  }

  return (
    <div className="App">
      
      <Routes>
          <Route path="/" element={<HomeView classrooms={classrooms}/>} />
          <Route path="classrooms/:id" element={<ClassroomView classrooms={classrooms} studentProjects={studentProjects}/>} />
          <Route path="student-projects/:id" element={<StudentProjectView users={users} studentProjects={studentProjects} />} />
          <Route path="student-projects/:id/add-project" element={<StudentAdminView addNewProjectCb={addNewProject}/>} />
          {/* <Route path='/add-project' element={<StudentAdminView users={users} classrooms={classrooms} studentProjects={studentProjects}/>} /> */}
          <Route path={`add-classroom`} element={<TeacherAdminView addNewClassroomCb={addNewClassroom}/>} />
      </Routes>
      


    </div>
  );
}

export default App;