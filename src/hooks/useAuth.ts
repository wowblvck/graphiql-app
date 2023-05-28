import { setUser } from '@/store/reducers/user/user.reducer';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const { email, token, id } = useAppSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          dispatch(
            setUser({
              id: user.uid,
              email: user.email,
              token,
            })
          );
        });
      }
      setIsLoading(false);
    });
  }, [dispatch]);

  return {
    isAuth: !!id,
    isLoading,
    id,
    email,
    token,
  };
};
