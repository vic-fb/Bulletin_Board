import React, { useState , useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';
import ClassroomView from './views/ClassroomView';
import StudentProjectView from './views/StudentProjectView';
import StudentAdminView from './views/StudentAdminView';
import TeacherAdminView from './views/TeacherAdminView';



function App(props) {


  let [users, setUsers] = useState([]);
  let [classrooms, setClassrooms] = useState([]);
  let [studentProjects, setStudentProjects] = useState([]);
  // let [currentUser, setCurrentUser] = useState({id: 1})
  let [options, setOptions] = useState([])
 

  const navigate = useNavigate();
 
  useEffect(() => {
    getUsers();
    getClassrooms();
    getProjects();
  }, []);

  

function getOptions(options) {
  setOptions(options);
}

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

  const updateProject = (newProject) => {
    let putOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject)
    }
    fetch(`/student-projects/${newProject.id}`, putOptions)
      .then(res => res.json())
      .then(json => {
        setStudentProjects(json);
      })
    .catch(error => {
      console.log(error.message);
    });
  }
  

  const addClassroom = (newClassroom) => {
    let postOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newClassroom)
    }
 
      fetch('/classrooms', postOptions)
        .then(res => res.json())
        .then(json => {
          setClassrooms(json);
        })
      .catch(error => {
        console.log(error.message);
      });  
  }

  const updateAssignment = (newAssignment) => {
    let putOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAssignment)
    }
    fetch(`/classrooms/${newAssignment.id}`, putOptions)
      .then(res => res.json())
      .then(json => {
        setClassrooms(json);
      })
      .catch(error => {
        console.log(error.message);
      });
  }


  const addUser = (newUser) => {
    let postOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)
    }
 
      fetch('/users', postOptions)
        .then(res => res.json())
        .then(json => {
          setUsers(json);
          let user = json[json.length-1];
          if (user.role === 'student') {
            addInitialProject(user);
          }
        })
      .catch(error => {
        console.log(error.message);
      });  
  }

  const addInitialProject = (user) => {
    let initialProject = {
      user_id: user.id,
      title: '',
      description: '',
      image_url: '',
      project_url: '',
      classroom_id: user.classroom_id
    }

    let postOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(initialProject)
    }

    fetch('/student-projects', postOptions)
      .then(res => res.json())
      .then(json => {
        setStudentProjects(json);
        navigate(`/classrooms/${json[json.length - 1].classroom_id}`);
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  return (
    <div className="App">
      
      <Routes>
          <Route path="/" element={<HomeView 
            classrooms={classrooms} 
            getOptionsCb={getOptions}/>} />
          <Route path="classrooms/:id" element={<ClassroomView classrooms={classrooms} studentProjects={studentProjects} users={users}/>} />
          
          <Route path="student-projects/:id" element={<StudentProjectView 
              users={users} 
              studentProjects={studentProjects} 
              toggleViewCb={props.toggleView}/>} >
              <Route path="update-project" element={<StudentAdminView 
                  updateProjectCb={updateProject} 
                  toggleViewCb={props.toggleViewCb}
                  studentProjects={studentProjects}/>} />
          </Route>
         
          <Route path={'teacher-admin'} element={<TeacherAdminView 
            addClassroomCb={addClassroom} 
            addUserCb={addUser}
            options={options}
            users={users}
            addInitialProjectCb={addInitialProject}
            updateAssignmentCb={updateAssignment}/>} />
      </Routes>
      


    </div>
  );
}

export default App;