import { Navigate } from 'react-router-dom';
import Local from '../helpers/Local';

function PrivateRoute({ children }) {
  const userId = Local.getUserId();
  if (!userId) {
    return <Navigate to="/login" />;
  }

  // Render child component(s)
  return (
    children
  );
}

export default PrivateRoute;
