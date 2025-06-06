import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCLrkjKQ4omW1H9n5dCnL6VRklc6uZcL_8',
  authDomain: 'learn-lingo-database.firebaseapp.com',
  databaseURL:
    'https://learn-lingo-database-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learn-lingo-database',
  storageBucket: 'learn-lingo-database.firebasestorage.app',
  messagingSenderId: '509178075773',
  appId: '1:509178075773:web:d7d74079ec6007d14def14',
  measurementId: 'G-YF4T01ZVK5',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase();
