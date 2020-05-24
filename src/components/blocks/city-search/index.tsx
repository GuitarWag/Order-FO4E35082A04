import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { size } from 'lodash';
import { Container, createStyles, InputAdornment } from '@material-ui/core';
import { MdClear, MdPinDrop, MdGpsFixed } from 'react-icons/md';
import I18N from '../../../i18n';
import { InputField } from '../../elements/form';
import { useSearchCityByZipcode } from '../../../hooks';
import Button from '../button';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: 0,
      margin: 0,
      width: 'auto',
    },
  }),
);
const startAdornment = (
  <InputAdornment position="start">
    <MdPinDrop size="1.2rem" />
  </InputAdornment>
);
// TODO
const endAdornment = (
  <InputAdornment position="start">
    <Button i18n={I18N.DETECT} onClick={() => alert('I DONT HAVE GOOGLE MAPS API KEY')}>
      <MdGpsFixed size="1.2rem" />
    </Button>
  </InputAdornment>
);

const CitySearch: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const { city, fetchCity, loading, clear } = useSearchCityByZipcode();
  const handleChange = useCallback(
    e => {
      setValue(e.target.value);
    },
    [setValue],
  );
  useEffect(() => {
    if (size(value) === 5) {
      fetchCity(value);
      setValue('');
    }
  }, [value, fetchCity]);

  return (
    <Container className={classes.container}>
      <InputField
        value={city || value}
        i18n={I18N.TYPE_ZIPCODE}
        onChange={handleChange}
        startAdornment={startAdornment}
        endAdornment={
          city ? (
            <InputAdornment position="end" onClick={clear}>
              <MdClear size="1.2rem" />
            </InputAdornment>
          ) : (
            endAdornment
          )
        }
        disabled={loading}
      />
    </Container>
  );
};

export default CitySearch;
