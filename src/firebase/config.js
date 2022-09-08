import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDxzlxFHXvaqFwcUQRfRFYrK49ckfJen-c',
  authDomain: 'socialcalories001.firebaseapp.com',
  projectId: 'socialcalories001',
  storageBucket: 'socialcalories001.appspot.com',
  messagingSenderId: '191900348330',
  appId: '1:191900348330:web:3001d60c1cf7e6a72e85d3',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
export const storageRef = ref(storage);
