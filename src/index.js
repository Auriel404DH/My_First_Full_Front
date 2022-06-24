import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

import './index.scss';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </>,
);
