import { Navigate } from 'react-router-dom';
import Local from '../helpers/Local';

function PublicRoute({ children }) {
  const isLoggedIn = !!Local.getUserId();
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  // Render child component(s)
  return (
    children
  );
}

export default PublicRoute;
