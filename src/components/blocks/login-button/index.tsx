import React, { useCallback } from 'react';
import Button from '../button';
import I18N from '../../../i18n';

const LoginButton: React.FC = () => {
  const onClick = useCallback(() => {
    // eslint-disable-next-line no-alert
    alert('PLEASE INTEGRATE ME'); // TODO
  }, []);
  return <Button onClick={onClick} i18n={I18N.LOGIN_SIGN_UP} />;
};

export default LoginButton;
