import React, { useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { map } from 'lodash';
import Link from '../../elements/link';
import BaseFooter from '../base-footer';

import I18N from '../../../i18n';
import ROUTES from '../../../navigation/routes';
import Typography from '../../elements/typography';
import { useTopSpecialities } from '../../../store/ducks/speciallities/hooks';
import { useTopCities } from '../../../store/ducks/cities/hooks';
import { Speciality } from '../../../api';
import { useNavigateTo } from '../../../navigation/hooks';

const Footer: React.FC = () => {
  const topSpecialists = useTopSpecialities();
  const topCities = useTopCities();
  const navigate = useNavigateTo();

  const getOnClick = (item: Record<string, any>) => () => {
    alert(JSON.stringify(item)); // TODO
  };

  const getOnSpeciality = useCallback(
    (speciality: Speciality) => () => {
      navigate(
        ROUTES.SPECIALITY,
        {
          speciality,
        },
        speciality.slug,
      );
    },
    [navigate],
  );
  return (
    <BaseFooter>
      <Grid xs={4} item>
        <Typography variant="h6" i18n={I18N.COLLEGE_DEMO} />
        <Link i18n={I18N.HOME} route={ROUTES.MAIN} contrast />
        <Link i18n={I18N.ABOUT_US} route={ROUTES.ABOUT_US} contrast />
      </Grid>
      <Grid xs={4} item>
        <Typography variant="h6" i18n={I18N.TOP_CITIES} />
        {map(topCities, top => (
          <Link route={ROUTES.DOCTORS} contrast key={top.id} onClick={getOnClick(top)}>
            {top.name}
          </Link>
        ))}
      </Grid>
      <Grid xs={4} item>
        <Typography variant="h6" i18n={I18N.TOP_SPECIALISTS} />
        {map(topSpecialists, top => (
          <Link route={ROUTES.SPECIALITY} contrast key={top.id} onClick={getOnSpeciality(top)}>
            {top.name}
          </Link>
        ))}
      </Grid>
    </BaseFooter>
  );
};

export default Footer;
