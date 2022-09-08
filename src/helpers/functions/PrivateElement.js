import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';

const PrivateElement = (isGuest, isUser) => {
  const { user } = useContext(AuthContext);
  if (user) return isUser;
  if (!user) return isGuest;
};
export default PrivateElement;
