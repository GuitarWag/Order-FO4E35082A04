import React from 'react';
import { Container, IconButton } from '@material-ui/core';
import { MdSearch } from 'react-icons/md';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      alignSelf: 'center',
      padding: 0,
      margin: 0,
      width: 'fit-content',
    },
  }),
);

const SearchButton: React.FC = () => {
  const classes = useStyles();
  const onClick = () => alert('Please Integrate me'); // TODO
  return (
    <Container className={classes.container}>
      <IconButton onClick={onClick}>
        <MdSearch size="2.0rem" />
      </IconButton>
    </Container>
  );
};

export default SearchButton;
