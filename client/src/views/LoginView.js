import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function LoginView({ loginError, loginCb, silentLoginCb }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paramsToken = params.get('token');

  useEffect(() => setToken(paramsToken), []);
  if (token) {
    silentLoginCb(token);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case 'emailInput':
        setEmail(value);
        break;
      case 'passwordInput':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    loginCb(email, password);
  }

  return (
    <div className="LoginView col1">
      <div className="col-4 offset-4">
        <h2 className="row justify-content-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="emailInput" className="text-light">
              Email
              <input
                type="email"
                name="emailInput"
                className="form-control"
                value={email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="passwordInput" className="text-light">
              Password
              <input
                type="password"
                name="passwordInput"
                className="form-control"
                value={password}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit" className="btn btn-secondary row">Submit</button>
        </form>
        <div className="row justify-content-center text">
          Are you a new teacher?
          <Link to="/signup" className="text">Register here</Link>
        </div>
        {
          loginError && (
            <div className="alert alert-danger w-75 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-exclamation-triangle d-inline"
                viewBox="0 0 16 16"
                style={{
                  marginRight: '10px',
                  position: 'relative',
                  top: '-2px',
                }}
              >
                <path
                  d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
                />
                <path
                  d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"
                />
              </svg>
              <div className="d-inline ml-5">{`${loginError}`}</div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default LoginView;
