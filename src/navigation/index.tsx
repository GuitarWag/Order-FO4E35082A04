import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../pages/main';
import ROUTES, { BASENAME } from './routes';
import Doctors from '../pages/doctors';
import Pharmacy from '../pages/pharmacy';
import Diagnostics from '../pages/diagnostics';
import NotFound from '../pages/not-found';
import AboutUs from '../pages/about-us';
import Speciality from '../pages/speciality';

const NavigationContainer: React.FC = () => {
  return (
    <Router basename={BASENAME}>
      <Switch>
        <Route exact path={ROUTES.MAIN}>
          <Main />
        </Route>
        <Route path={ROUTES.DOCTORS}>
          <Doctors />
        </Route>
        <Route path={ROUTES.PHARMACY}>
          <Pharmacy />
        </Route>
        <Route path={ROUTES.DIAGNOSTICS}>
          <Diagnostics />
        </Route>
        <Route path={ROUTES.ABOUT_US}>
          <AboutUs />
        </Route>
        <Route path={ROUTES.SPECIALITY}>
          <Speciality />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default NavigationContainer;
