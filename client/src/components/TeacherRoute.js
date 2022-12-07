import { Navigate } from 'react-router-dom';
import Local from '../helpers/Local';

function TeacherRoute({ children }) {
  const userRole = Local.getUserRole();
  const userId = Local.getUserId();
  if (!userId || userRole !== 'teacher') {
    return <Navigate to="/" />;
  }

  return (
    children
  );
}

export default TeacherRoute;
