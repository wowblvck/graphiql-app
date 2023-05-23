import { RouterProvider } from 'react-router-dom';
import router from '@/routes/router';
import { getAuth } from 'firebase/auth';
import { useAppDispatch } from './store/store';
import { setUser } from './store/reducers/user/user.reducer';
import { Suspense } from 'react';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';

const App = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
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
  });
  return (
    <Suspense
      fallback={
        <Spin
          tip={t('loading.message_1')}
          size="large"
          style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
