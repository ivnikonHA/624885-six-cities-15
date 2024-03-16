import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/app';
import { getMockOffers } from './mocks/offers-mock';
import { store } from './store';

const mockOffers = getMockOffers();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={mockOffers}></App>
    </Provider>
  </React.StrictMode>
);
