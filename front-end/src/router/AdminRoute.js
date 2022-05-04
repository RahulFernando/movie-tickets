import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (user.role !== 'PRODUCTION') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
