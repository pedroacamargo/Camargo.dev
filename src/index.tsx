import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LinksProvider } from './utils/contexts/socialLinks.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LinksProvider>
      <App />
    </LinksProvider>
  </React.StrictMode>
);