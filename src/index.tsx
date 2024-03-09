import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';
import { getMockOffers } from './mocks/offers-mock';
import { getRandomNumber } from './utils';

const placesCount = getRandomNumber(1,999);
const mockOffers = getMockOffers();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={placesCount} offers={mockOffers}></App>
  </React.StrictMode>
);
