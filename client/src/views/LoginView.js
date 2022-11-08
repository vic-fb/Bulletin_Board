import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

        {
          loginError && (
            <div className="alert alert-danger">{loginError}</div>
          )
        }

        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="emailInput" className="text-light">
              Email
              <input
                type="text"
                name="emailInput"
                required
                className="form-control"
                value={email}
                onChange={handleChange}
                aria-required
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
                aria-required
              />
            </label>
          </div>

          <button type="submit" className="btn btn-secondary row">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginView;
