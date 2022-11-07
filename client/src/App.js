import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import ClassroomView from './views/ClassroomView';
import StudentProjectView from './views/StudentProjectView';
import StudentAdminView from './views/StudentAdminView';
import TeacherAdminView from './views/TeacherAdminView';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Local from './helpers/Local';
import {
  getUsers, getProjects, getClassrooms, logUserIn, addClassroom, addUser, createProject,
} from './api';

function App(props) {
  const [users, setUsers] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [studentProjects, setStudentProjects] = useState([]);
  const [options, setOptions] = useState([]);
  const [user, setUser] = useState([]);
  const [loginErrorMsg, setLoginErrorMsg] = useState('');

  const navigate = useNavigate();

  async function doLogin(email, password) {
    try {
      const response = await logUserIn(password, email);
      Local.saveUserInfo(response.token, response.user);
      setUser(response.user);
      setLoginErrorMsg('');
      navigate('/');
    } catch (err) {
      setLoginErrorMsg('Login failed');
    }
  }

  function logUserOut() {
    Local.removeUserInfo();
    setUser(null);
  }

  useEffect(() => {
    getUsers()
      .then((usersData) => setUsers(usersData));
    getClassrooms()
      .then((classroomsData) => setClassrooms(classroomsData));
    getProjects()
      .then((projectsData) => setClassrooms(projectsData));
  }, [studentProjects]);

  function getOptions(options) {
    setOptions(options);
  }

  const updateProject = (newProject) => {
    const putOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject),
    };
    fetch(`/student-projects/${newProject.id}`, putOptions)
      .then((res) => res.json())
      .then((json) => {
        setStudentProjects(json);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const addNewClassroom = (newClassroom) => {
    addClassroom(newClassroom)
      .then((classrooms) => setClassrooms(classrooms));
  };

  const updateAssignment = (newAssignment) => {
    const putOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAssignment),
    };
    fetch(`/classrooms/${newAssignment.id}`, putOptions)
      .then((res) => res.json())
      .then((json) => {
        setClassrooms(json);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const addStudent = async (newUser) => {
    try {
      const { id } = await addUser(newUser);
      if (newUser.role === 'student') {
        const projects = await createProject({ ...newUser, id });
        // it used to navigate to the classroom when adding an initial project?
        setStudentProjects(projects);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // create student views and teacher routes (in addition to private route?)
  return (
    <div className="App">
      <NavBar classrooms={classrooms} getOptionsCb={getOptions} user={user} onLogout={logUserOut} />
      <Routes>
        <Route // TODO If here and user is already logged in, redirect to home!
          path="/login"
          element={(
            <LoginView
              loginCb={(u, p) => doLogin(u, p)}
              loginError={loginErrorMsg}
            />
        )}
        />

        <Route
          path="/"
          element={(
            <PrivateRoute>
              <HomeView classrooms={classrooms} getOptionsCb={getOptions} />
            </PrivateRoute>
        )}
        />
        <Route
          path="classrooms/:id"
          element={(
            <ClassroomView
              classrooms={classrooms}
              studentProjects={studentProjects}
              users={users}
            />
          )}
        />

        <Route
          path="student-projects/:id"
          element={(
            <StudentProjectView
              users={users}
              studentProjects={studentProjects}
              toggleViewCb={props.toggleView}
            />
          )}
        >
          <Route
            path="update-project"
            element={(
              <StudentAdminView
                updateProjectCb={updateProject}
                toggleViewCb={props.toggleViewCb}
                studentProjects={studentProjects}
              />
            )}
          />
        </Route>

        <Route
          path="teacher-admin"
          element={(
            <PrivateRoute>
              <TeacherAdminView
                addClassroomCb={addNewClassroom}
                addUserCb={addStudent}
                classrooms={classrooms}
                getOptionsCb={getOptions}
                users={users}
                addInitialProjectCb={createProject}
                updateAssignmentCb={updateAssignment}
              />
            </PrivateRoute>

              )}
        />

      </Routes>
    </div>
  );
}

export default App;
