import * as React from 'react';
import { createStyles, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  children: React.ReactNode;
}
interface IStatic {
  Header: React.FC<Props>;
  Content: React.FC<Props>;
  Footer: React.FC<Props>;
}
type Component = React.FC<Props> & IStatic;

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'grid',
      minHeight: '100vh',
      gridTemplateRows: '60px calc(100vh - 250px) 100px',
    },
    content: {
      padding: '15px 80px',
      alignContent: 'flex-start',
    },
  }),
);

const Page: Component = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {children}
    </Grid>
  );
};

const Header = ({ children }: Props) => <Grid container>{children}</Grid>;
const Content = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.content}>
      {children}
    </Grid>
  );
};
const Footer = ({ children }: Props) => <Grid container>{children}</Grid>;

Page.Header = Header;
Page.Content = Content;
Page.Footer = Footer;

export default Page;
