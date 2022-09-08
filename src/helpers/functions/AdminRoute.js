import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContex';

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user && user.role === 'admin') {
    return children;
  }
  return <Navigate to="/error" />;
};
export default AdminRoute;
