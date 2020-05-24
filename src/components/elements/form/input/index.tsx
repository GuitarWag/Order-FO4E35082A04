import React, { ChangeEvent } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import { useIntl } from 'react-intl';
import { I18nShape } from '../../typography/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '100%',
    },
  }),
);

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  i18n: I18nShape;
  disabled?: boolean;
}

const InputField: React.FC<Props> = ({ endAdornment, startAdornment, onChange, value, i18n, disabled }: Props) => {
  const classes = useStyles();
  const { formatMessage } = useIntl();
  const placeholder = formatMessage({ id: i18n.key, defaultMessage: i18n.message }, i18n.values);
  return (
    <div className={classes.root}>
      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <OutlinedInput
          id="filled-adornment"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          endAdornment={endAdornment}
          startAdornment={startAdornment}
          fullWidth
          disabled={disabled}
        />
      </FormControl>
    </div>
  );
};

export default InputField;
