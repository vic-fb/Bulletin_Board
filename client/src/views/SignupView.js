import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api';

const NEW_USER = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};
function SignupView() {
  const [newUser, setNewUser] = useState(NEW_USER);
  const navigate = useNavigate();
  function handleChange(event) {
    const { name, value } = event.target;
    const user = { ...newUser, [name]: value };
    setNewUser(user);
  }

  function handleSubmit(event) {
    event.preventDefault();
    signup(newUser);
    navigate('/');
  }

  return (
    <div className="Signup col1">
      <div className="col-4 offset-4">
        <h2 className="row justify-content-center">Teacher registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="firstName" className="text-light">
              First Name
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={newUser.firstName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="lastName" className="text-light">
              Last Name
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={newUser.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="text-light">
              Email
              <input
                type="email"
                name="email"
                className="form-control"
                value={newUser.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="text-light">
              Password
              <input
                type="password"
                name="password"
                className="form-control"
                value={newUser.password}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit" className="btn btn-secondary row">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignupView;
