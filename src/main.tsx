import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './i18n';
import 'normalize.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<div>Loading</div>}>
    <App />
  </Suspense>
);
