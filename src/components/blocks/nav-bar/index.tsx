import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '../app-bar';
import Link from '../../elements/link';

import I18N from '../../../i18n';
import ROUTES from '../../../navigation/routes';
import LoginButton from '../login-button';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'inline-flex',
    },
  }),
);

const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Grid xs={10} item>
        <Container className={classes.container}>
          <Link i18n={I18N.COLLEGE_DEMO} route={ROUTES.MAIN} />
          <Link i18n={I18N.DOCTORS} i18nCaption={I18N.BOOK_AN_APPOINTMENT} route={ROUTES.DOCTORS} />
          <Link i18n={I18N.PHARMACY} i18nCaption={I18N.MEDICINES_AND_HEALTH_PRODUCTS} route={ROUTES.PHARMACY} />
          <Link i18n={I18N.DIAGNOSTICS} i18nCaption={I18N.BOOK_TESTS_AND_CHECKUPS} route={ROUTES.DIAGNOSTICS} />
        </Container>
      </Grid>
      <Grid xs={2} item>
        <LoginButton />
      </Grid>
    </AppBar>
  );
};

export default NavBar;
