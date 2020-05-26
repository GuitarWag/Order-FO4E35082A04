import React from 'react';
import { Container, createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../../elements/typography';
import I18N from '../../../i18n';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: '0 5px',
      height: 'fit-content',
      margin: '50px 0',
    },
  }),
);

const TitleAndDescription: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h5" i18n={I18N.TITLE} />
      <Typography variant="body1" i18n={I18N.DESCRIPTION} />
    </Container>
  );
};

export default TitleAndDescription;
