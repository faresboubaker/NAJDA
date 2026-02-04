import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyXXXXXX-YOUR-KEY',
  authDomain: 'najda-app.firebaseapp.com',
  projectId: 'najda-app',
  storageBucket: 'najda-app.appspot.com',
  messagingSenderId: 'XXXXXXX',
  appId: '1:XXXXXXX:web:XXXXXX'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
