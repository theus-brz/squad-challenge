import React from 'react';
import { Provider } from 'react-redux';

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
      </ThemeProvider>
    </Provider>
  );
}

export default App;
