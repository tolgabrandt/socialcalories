import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../firebase/config';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';
import { doc, setDoc } from 'firebase/firestore';

const useSignup = () => {
  const defaultAvatar = `https://firebasestorage.googleapis.com/v0/b/socialcalories001.appspot.com/o/default.jpg?alt=media&token=39824491-06e2-4ba5-8180-bc94d25640b8`;
  const { dispatch } = useContext(AuthContext);

  const signup = async (email, password, displayName) => {
    dispatch({ type: 'REGISTER_REQUEST' });
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: displayName,
        photoURL: defaultAvatar,
      });
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        photoURL: defaultAvatar,
        role: 'user',
      });
      dispatch({ type: 'REGISTER_SUCCESS' });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    signup,
  };
};
export default useSignup;
