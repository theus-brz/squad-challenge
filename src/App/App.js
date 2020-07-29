import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import Routes from '../routes';
import '../config/reactotronConfig';
import { store } from '../store';
import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
