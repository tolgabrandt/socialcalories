import { useEffect } from 'react';
import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        try {
          onSnapshot(doc(db, 'users', user.uid), (doc) => {
            if (doc.exists()) {
              dispatch({ type: 'AUTH_USER', payload: doc.data() });
            } else {
              dispatch({ type: 'AUTH_GUEST' });
            }
          });
        } catch (err) {
          dispatch({ type: 'AUTH_GUEST' });
        }
      } else {
        dispatch({ type: 'AUTH_GUEST' });
      }
    });
  }, []);

  const initialState = {
    user: null,
    success: false,
    error: null,
    isPending: false,
    isAuthReady: false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const data = {
    ...state,
    dispatch,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
