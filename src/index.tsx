import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { getRandomNumber } from './utils';

const placesCount = getRandomNumber(1,999);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={placesCount}></App>
  </React.StrictMode>
);
