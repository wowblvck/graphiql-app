import { createBrowserRouter } from 'react-router-dom';
import Root from '@/layouts/Root';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import AboutPage from '@/pages/AboutPage/AboutPage';
import Router from './router.types';
import { HomeOutlined } from '@ant-design/icons';

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
