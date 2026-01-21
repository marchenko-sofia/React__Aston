import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/shared/styles/index.css';
import App from './app/App.tsx';
import { Provider } from 'react-redux';
import store from './app/providers/store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)