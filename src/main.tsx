import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Spin } from 'antd';
import App from './App.tsx';
import store from './store/store.ts';
import './i18n';
import 'normalize.css';
import './firebase.ts';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense
    fallback={
      <Spin
        size="large"
        style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
    }
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);
