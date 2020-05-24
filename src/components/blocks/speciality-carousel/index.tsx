import React from 'react';
import { Grid } from '@material-ui/core';
import { useSpecialities } from '../../../store/ducks/speciallities/hooks';
import SpecialityCard from '../speciality-card';
import Carousel from '../carousel';

const SpecialityCarousel: React.FC = () => {
  const specialities = useSpecialities();
  return (
    <Carousel
      data={specialities}
      renderItem={item => {
        return (
          <Grid item key={item.id}>
            <SpecialityCard speciality={item} />
          </Grid>
        );
      }}
    />
  );
};

export default SpecialityCarousel;
