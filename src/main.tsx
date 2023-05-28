import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import store from './store/store.ts';
import './i18n';
import 'normalize.css';
import './main.css';
import './firebase.ts';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
