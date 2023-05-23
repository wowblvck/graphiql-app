import { createBrowserRouter } from 'react-router-dom';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import Router from './router.types';
import { HomeOutlined } from '@ant-design/icons';
import AuthPage from '@/pages/AuthPage/AuthPage';
import PlaygroundPage from '@/pages/PlaygroundPage/PlaygroundPage';
import Page404 from '@/pages/Page404/Page404 ';
import { Suspense, lazy } from 'react';
import { Content } from 'antd/es/layout/layout';
import { Spin } from 'antd';

const RequireAuth = lazy(() => import('@components/Auth/RequireAuth/RequireAuth'));

const Root = lazy(() => import('@/layouts/Root'));

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
          <Suspense
            fallback={
              <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spin size="large" />
              </Content>
            }
          >
            <RequireAuth>
              <PlaygroundPage />
            </RequireAuth>
          </Suspense>
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
