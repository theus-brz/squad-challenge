import React from 'react';

import { ThemeProvider } from 'styled-components';

import MyTeams from './pages/MyTeams/MyTeams';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <MyTeams />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
