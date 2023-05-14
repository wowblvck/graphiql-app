import { Navigate, createBrowserRouter, useLocation } from 'react-router-dom';
import Root from '@/layouts/Root';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import Router from './router.types';
import { HomeOutlined } from '@ant-design/icons';
import AuthPage from '@/pages/AuthPage/AuthPage';
import PlaygroundPage from '@/pages/PlaygroundPage/PlaygroundPage';
import { useAuth } from '@/hooks/useAuth';

export enum Routes {
  Welcome = '/',
  Auth = '/auth',
  Playground = '/playground',
}

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={Routes.Auth} state={{ from: location }} replace />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: Routes.Welcome,
    element: <Root />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: Routes.Auth,
        element: <AuthPage />,
      },
      {
        path: Routes.Playground,
        element: (
          <RequireAuth>
            <PlaygroundPage />
          </RequireAuth>
        ),
      },
    ],
  },
]);

export const routerLinks: Router[] = [
  {
    name: 'home',
    path: '/',
    icon: <HomeOutlined />,
  },
  {
    name: 'playground',
    path: '/playground',
  },
];

export default router;
