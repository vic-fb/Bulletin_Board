import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import emailjs from '@emailjs/browser';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';
import ClassroomView from './views/ClassroomView';
import StudentProjectView from './views/StudentProjectView';
import StudentAdminView from './views/StudentAdminView';
import TeacherAdminView from './views/TeacherAdminView';
import PrivateRoute from './components/PrivateRoute';
import TeacherRoute from './components/TeacherRoute';
import NavBar from './components/NavBar';
import Local from './helpers/Local';
import {
  getUsers, getProjects, getClassrooms, logUserIn,
  addClassroom, addUser, createProject, silentLogUserIn,
} from './api';
import PublicRoute from './components/PublicRoute';

function App({ toggleViewCb, toggleView }) {
  const [users, setUsers] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [studentProjects, setStudentProjects] = useState([]);
  const [options, setOptions] = useState([]);
  const [user, setUser] = useState(null);
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const isError = (response) => typeof response === 'string';

  const navigate = useNavigate();

  async function doLogin(email, password) {
    const response = await logUserIn(password, email);
    if (isError(response)) {
      setLoginErrorMsg('Login failed');
    } else {
      Local.saveUserInfo(response.token, response.user);
      setUser(response.user);
      setLoginErrorMsg('');
      navigate('/');
    }
  }

  async function doSilentLogin(token) {
    const response = await silentLogUserIn(token);
    if (isError(response)) {
      setLoginErrorMsg('Login failed');
    } else {
      Local.saveUserInfo(token, response.user);
      setUser(response.user);
      setLoginErrorMsg('');
      navigate('/'); // may want students to navigate somewhere else
    }
  }

  function logUserOut() {
    Local.removeUserInfo();
    navigate('/login');
    setUser(null);
  }

  useEffect(() => {
    getUsers()
      .then((usersData) => setUsers(usersData));
    getClassrooms()
      .then((classroomsData) => setClassrooms(classroomsData));
    getProjects()
      .then((projectsData) => setStudentProjects(projectsData));
    const userData = Local.getUser();
    setUser(userData);
  }, []);

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
      .then((classroomsData) => setClassrooms(classroomsData));
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
      const { id, token } = await addUser(newUser);
      if (newUser.role === 'student') {
        const projects = await createProject({ ...newUser, id });
        setStudentProjects(projects);
        emailjs.send('service_2v3uzwt', 'template_ehvx5mk', {
          to_name: newUser.first_name,
          from_name: `${user.first_name} ${user.last_name}`,
          message: `http://localhost:3000/login?token=${token}`,
          to_email: newUser.email,
        }, '5eCaYXFyYInKODrBQ');
        const usersData = await getUsers();
        setUsers(usersData);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // create student views and teacher routes (in addition to private route?)
  return (
    <div className="App">
      <NavBar
        classrooms={classrooms}
        getOptionsCb={getOptions}
        user={user}
        onLogout={logUserOut}
        studentProjects={studentProjects}
      />
      <Routes>
        <Route
          path="/login"
          element={(
            <PublicRoute>
              <LoginView
                loginCb={doLogin}
                silentLoginCb={doSilentLogin}
                loginError={loginErrorMsg}
              />
            </PublicRoute>
        )}
        />
        <Route
          path="/signup"
          element={(
            <PublicRoute>
              <SignupView
                // signupCb={doSignup}
                silentLoginCb={doSilentLogin}
              />
            </PublicRoute>
          )}
        />

        <Route
          path="/"
          element={(
            <PrivateRoute>
              <HomeView classrooms={classrooms} getOptionsCb={getOptions} user={user} />
            </PrivateRoute>
        )}
        />
        <Route
          path="classrooms/:id"
          element={(
            <PrivateRoute>
              <ClassroomView
                classrooms={classrooms}
                studentProjects={studentProjects}
                users={users}
              />
            </PrivateRoute>
          )}
        />

        <Route
          path="student-projects/:id"
          element={(
            <PrivateRoute>
              <StudentProjectView
                user={user}
                users={users}
                studentProjects={studentProjects}
                toggleViewCb={toggleView}
              />
            </PrivateRoute>
          )}
        >
          <Route
            path="update-project"
            element={(
              <PrivateRoute>
                <StudentAdminView
                  updateProjectCb={updateProject}
                  toggleViewCb={toggleViewCb}
                  studentProjects={studentProjects}
                />
              </PrivateRoute>
            )}
          />
        </Route>

        <Route
          path="teacher-admin"
          element={(
            <TeacherRoute>
              <TeacherAdminView
                addClassroomCb={addNewClassroom}
                addUserCb={addStudent}
                classrooms={classrooms}
                getOptionsCb={getOptions}
                users={users}
                updateAssignmentCb={updateAssignment}
              />
            </TeacherRoute>

              )}
        />

      </Routes>
    </div>
  );
}

export default App;
