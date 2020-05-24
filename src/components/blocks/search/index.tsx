import React from 'react';
import { Container } from '@material-ui/core';
import CitySearch from '../city-search';
import SiteRelatedSearch from '../site-related-search';
import SearchButton from '../search-button';
import { usePageItemContainerStyles } from '../../../common-styles';

const Search: React.FC = () => {
  const classes = usePageItemContainerStyles();
  return (
    <Container className={classes.container}>
      <CitySearch />
      <SiteRelatedSearch />
      <SearchButton />
    </Container>
  );
};

export default Search;
