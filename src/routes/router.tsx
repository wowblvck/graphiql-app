import { createBrowserRouter } from 'react-router-dom';
import Router from './router.types';
import { HomeOutlined } from '@ant-design/icons';
import Page404 from '@/pages/Page404/Page404 ';
import { lazy } from 'react';

const Root = lazy(() => import('@/layouts/Root'));
const WelcomePage = lazy(() => import('@/pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('@/pages/AuthPage/AuthPage'));
const RequireAuth = lazy(() => import('@components/Auth/RequireAuth/RequireAuth'));
const PlaygroundPage = lazy(() => import('@/pages/PlaygroundPage/PlaygroundPage'));

export enum Routes {
  Home = '/',
  Auth = '/auth',
  Playground = '/playground',
}

const router = createBrowserRouter([
  {
    path: Routes.Home,
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
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]);

export const routerLinks: Router[] = [
  {
    name: 'home',
    path: '/',
    icon: <HomeOutlined />,
    isPrivate: false,
  },
  {
    name: 'playground',
    path: '/playground',
    isPrivate: true,
    isVisible: false,
  },
];

export default router;
