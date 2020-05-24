import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, createStyles, InputAdornment } from '@material-ui/core';
import { MdSearch } from 'react-icons/md';
import I18N from '../../../i18n';
import { InputField } from '../../elements/form';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: 0,
      margin: 0,
      width: 400,
    },
  }),
);
const startAdornment = (
  <InputAdornment position="start">
    <MdSearch size="1.2rem" />
  </InputAdornment>
);

const SiteRelatedSearch: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const handleChange = useCallback(
    e => {
      setValue(e.target.value);
    },
    [setValue],
  );
  return (
    <Container className={classes.container}>
      <InputField value={value} i18n={I18N.SEARCH_DOCTORS} onChange={handleChange} startAdornment={startAdornment} />
    </Container>
  );
};

export default SiteRelatedSearch;
