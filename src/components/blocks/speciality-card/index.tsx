import React, { useCallback } from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Speciality } from '../../../api';
import Typography from '../../elements/typography';
import { useNavigateTo } from '../../../navigation/hooks';
import ROUTES from '../../../navigation/routes';

interface Props {
  speciality: Speciality;
}

const useStyles = makeStyles({
  root: {
    width: 235,
  },
  media: {
    height: 140,
  },
});

const SpecialityCard: React.FC<Props> = ({ speciality }: Props) => {
  const classes = useStyles();
  const navigateTo = useNavigateTo();
  const onClick = useCallback(() => {
    navigateTo(
      ROUTES.SPECIALITY,
      {
        speciality,
      },
      speciality.slug,
    );
  }, [navigateTo, speciality]);
  if (!speciality) return null;
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onClick}>
        <CardMedia className={classes.media} image={speciality.image} />
        <CardContent>
          <Typography gutterBottom variant="body2">
            {speciality.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SpecialityCard;
