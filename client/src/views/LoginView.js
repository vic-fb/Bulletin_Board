import { useState } from 'react';

function LoginView(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    props.loginCb(email, password);
  }

  return (
    <div className="LoginView row">
      <div className="col-4 offset-4">
        <h2>Login</h2>

        {
          props.loginError && (
            <div className="alert alert-danger">{props.loginError}</div>
          )
        }

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Email
              <input
                type="text"
                name="emailInput"
                required
                className="form-control"
                value={email}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Password
              <input
                type="password"
                name="passwordInput"
                required
                className="form-control"
                value={password}
                onChange={handleChange}
              />
            </label>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginView;
