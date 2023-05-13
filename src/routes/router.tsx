import { createBrowserRouter } from 'react-router-dom';
import Root from '@/layouts/Root';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import AboutPage from '@/pages/AboutPage/AboutPage';
import Router from './router.types';
import { HomeOutlined } from '@ant-design/icons';
import AuthPage from '@/pages/AuthPage/AuthPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
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
    name: 'about',
    path: '/about',
  },
];

export default router;
