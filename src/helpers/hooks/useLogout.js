import { useContext } from 'react';
import { auth } from '../../firebase/config';
import { AuthContext } from '../../context/AuthContex';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await auth.signOut();
      dispatch({ type: 'LOGOUT_SUCCESS' });
      navigate('/');
    } catch (err) {}
  };
  return {
    logout,
  };
};
export default useLogout;
