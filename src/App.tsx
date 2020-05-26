import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import store from './store';
import { en } from './i18n';
import NavigationContainer from './navigation';
import theme from './theme';
import { BASENAME } from './navigation/routes';

// WE CAN CREATE A STORE TO DEAL WITH OTHER LANGUAGES LATER
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <IntlProvider locale="en" messages={en}>
        <ThemeProvider theme={theme}>
          <Router basename={BASENAME}>
            <NavigationContainer />
          </Router>
        </ThemeProvider>
      </IntlProvider>
      <CssBaseline />
    </Provider>
  );
};

export default App;
