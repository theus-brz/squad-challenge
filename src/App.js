import React from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
