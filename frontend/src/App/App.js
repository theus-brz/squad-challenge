import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';

import '../config/reactotronConfig';
import { store } from '../store';
import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import Main from './Main';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <Main />
        <GlobalStyle />
        <ToastContainer autoClose={6000} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
