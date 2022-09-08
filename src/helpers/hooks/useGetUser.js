import { doc, onSnapshot } from 'firebase/firestore';
import { useReducer } from 'react';
import { db } from '../../firebase/config';

const useGetDoc = (collects) => {
  const initialState = {
    userData: null,
    isPending: false,
    error: null,
    success: false,
  };

  const getUserReducer = (state, action) => {
    switch (action.type) {
      case 'GET_USER_REQUEST':
        return {
          ...state,
          isPending: true,
          error: null,
          userData: null,
          success: false,
        };
      case 'GET_USER_SUCCESS':
        return {
          ...state,
          userData: action.payload,
          isPending: false,
          success: true,
        };
      case 'GET_USER_ERROR':
        return {
          ...state,
          userData: action.payload,
          isPending: false,
          error: true,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(getDocReducer, initialState);

  const getUser = (uid) => {
    dispatch({ type: 'GET_USER_REQUEST' });
    try {
      const unsub = onSnapshot(doc(db, collects, uid), (doc) => {
        if (doc.exists()) {
          dispatch({ type: 'GET_USER_SUCCESS', payload: doc.data() });
        } else {
          dispatch({ type: 'GET_USER_ERROR' });
        }
      });
    } catch (err) {
      dispatch({ type: 'GET_USER_ERROR' });
    }
  };

  return {
    getUser,
    ...state,
  };
};
export default useGetDoc;
