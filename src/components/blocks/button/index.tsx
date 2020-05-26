import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { I18nShape } from '../../elements/typography/types';
import Typography from '../../elements/typography';

interface Props {
  onClick: () => void;
  i18n: I18nShape;
  children?: React.ReactNode;
}
const Button: React.FC<Props> = ({ onClick, i18n, children }: Props) => {
  return (
    <MuiButton size="small" fullWidth variant="outlined" color="primary" onClick={onClick}>
      {children}
      <Typography i18n={i18n} />
    </MuiButton>
  );
};
export default Button;
