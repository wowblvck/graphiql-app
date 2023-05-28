import { RouterProvider } from 'react-router-dom';
import router from '@/routes/router';
import { Spin } from 'antd';
import { Suspense } from 'react';

const App = () => {
  return (
    <Suspense
      fallback={
        <Spin
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
