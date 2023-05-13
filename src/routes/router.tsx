import { createBrowserRouter } from 'react-router-dom';
import Root from '@/layouts/Root';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import AboutPage from '@/pages/AboutPage/AboutPage';
import Router from './router.types';
import { HomeOutlined } from '@ant-design/icons';
import PlaygroundPage from '@/pages/PlaygroundPage/PlaygroundPage';

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
        path: 'playground',
        element: <PlaygroundPage />,
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
  {
    name: 'playground',
    path: '/playground',
  },
];

export default router;
