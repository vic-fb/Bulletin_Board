import React, { useState , useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';
import ClassroomView from './views/ClassroomView';
import StudentProjectView from './views/StudentProjectView';

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

  return (
    <div className="App">
      
      <Routes>
          <Route path="/" element={<HomeView classrooms={classrooms}/>} />
          <Route path="classrooms/:id" element={<ClassroomView classrooms={classrooms} studentProjects={studentProjects}/>} />
          <Route path="student-projects/:id" element={<StudentProjectView userCount={users.length} />} />
          {/* 
          <Route path="users" element={<UsersView users={users} />} />
          <Route path="users/:id" element={<UserProfileView users={users} />} />
          <Route path="add-user" element={<AddUserView addUserCb={name => addUser(name)} />} />
          <Route path="*" element={<Error404View />} /> */}
      </Routes>
      


    </div>
  );
}

export default App;
