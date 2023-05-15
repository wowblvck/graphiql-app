import { createBrowserRouter } from 'react-router-dom';
import Root from '@/layouts/Root';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import Router from './router.types';
import { HomeOutlined } from '@ant-design/icons';
import AuthPage from '@/pages/AuthPage/AuthPage';
import PlaygroundPage from '@/pages/PlaygroundPage/PlaygroundPage';
import RequireAuth from '@/components/Auth/RequireAuth/RequireAuth';
import Page404 from '@/pages/Page404/Page404 ';

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
  },
  {
    name: 'playground',
    path: '/playground',
  },
];

export default router;
