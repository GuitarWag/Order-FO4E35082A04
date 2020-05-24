import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import store from './store';
import { en } from './i18n';
import NavigationContainer from './navigation';
import theme from './theme';

const history = createBrowserHistory({
  basename: '/',
});

// WE CAN CREATE A STORE TO DEAL WITH OTHER LANGUAGES LATER
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <IntlProvider locale="en" messages={en}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <CssBaseline />
            <NavigationContainer />
          </Router>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  );
};

export default App;
