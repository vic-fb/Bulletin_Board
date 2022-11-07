import Local from './helpers/Local';

const getRequest = (path) => fetch(path)
  .then((response) => {
    if (!response.ok) { throw new Error('Network response was not OK'); }
    return response.json();
  })
  .catch((error) => error.message);

const postRequest = (path, body) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const token = Local.getToken();
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  return fetch(path, options)
    .then((response) => {
      if (!response.ok) { throw new Error('Network response was not OK'); }
      return response.json();
    })
    .catch((error) => error.message);
};

export const getUsers = () => getRequest('/users');
export const getClassrooms = () => getRequest('/classrooms');
export const getProjects = () => getRequest('/student-projects');

export const logUserIn = (password, email) => postRequest('/login', { password, email });
export const addClassroom = (newClassroom) => postRequest('/classrooms', newClassroom);
export const addUser = (newUser) => postRequest('/users', newUser);
export const createProject = (newUser) => {
  const initialProject = {
    user_id: newUser.id,
    title: '',
    description: '',
    image_url: '',
    project_url: '',
    classroom_id: newUser.classroom_id,
  };
  return postRequest('/student-projects', initialProject);
};
