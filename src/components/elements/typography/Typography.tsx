import * as React from 'react';
import MuiTypography, { TypographyProps } from '@material-ui/core/Typography';
import { useIntl } from 'react-intl';
import { I18nShape } from './types';

interface Props extends TypographyProps {
  children?: string | number;
  i18n?: I18nShape;
  prefix?: string;
  suffix?: string;
}

const Typography: React.FunctionComponent<Props> = ({
  children, i18n, prefix, suffix, ...rest
}: Props) => {
  let content;
  const { formatMessage } = useIntl();
  if (children) content = children;
  else if (i18n) {
    content = formatMessage({ id: i18n.key, defaultMessage: i18n.message }, i18n.values);
  }
  content = `${prefix}${content}${suffix}`;
  return (
    <MuiTypography {...rest}>
      {content}
    </MuiTypography>
  );
};

Typography.defaultProps = {
  prefix: '',
  suffix: '',
};

export default Typography;
