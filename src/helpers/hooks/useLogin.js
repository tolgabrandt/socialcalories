import { signInWithEmailAndPassword } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';
import { auth } from '../../firebase/config';

const useLogin = () => {
  const { dispatch } = useContext(AuthContext);

  const login = async (email, password) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    try {
      await signInWithEmailAndPassword(auth, email, password);

      dispatch({ type: 'LOGIN_SUCCESS' });
    } catch (err) {}
  };
  return {
    login,
  };
};
export default useLogin;
