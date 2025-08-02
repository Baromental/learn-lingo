import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../redux/firebase';

export const useAuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch({
          type: 'auth/login/fulfilled',
          payload: {
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          },
        });
      } else {
        dispatch({ type: 'auth/logout/fulfilled' });
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
};
