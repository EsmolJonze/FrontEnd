import React from 'react';
import {
  BobjectField,
  DateTextField,
  NumberTextField,
  PhoneTextField,
} from '../filter/field/field';
import { withStyles } from '@material-ui/core';
import { cssVariables } from '../../style/variables';
import { makeUrl } from '../../misc/utils';

const afterAndBeforeStyle = {
  content: '""',
  position: 'absolute',
  zIndex: '1',
  width: '70.71px',
  height: '70.71px',
  transform: 'scaleY(0.5774) rotate(-45deg)',
  backgroundColor: 'inherit',
  left: '14.6447px',
};

const afterStyle = Object.assign({}, afterAndBeforeStyle);
afterStyle.top = '-35.3553px';

const beforeStyle = Object.assign({}, afterAndBeforeStyle);
beforeStyle.bottom = '-35.3553px';

const styles = {
  hexagon: {
    position: 'relative',
    width: '100px',
    height: '57.74px',
    backgroundColor: '#64C7CC',
    margin: '28.87px 0',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& span': {
      fontSize: '26px',
      fontWeight: 'bold',
    },
  },
  labelValue: {
    fontSize: '13px',
    marginBottom: '4px',
    color: cssVariables.color.gunmetal.light,
  },
  multilineField: {},
};

const getContent = field => {
  if (field.type === 'DATE' || field.type === 'DATETIME') {
    return <DateTextField field={field} />;
  }
  if (field.type === 'PHONE') {
    return <PhoneTextField field={field} />;
  }
  if (field.type === 'NUMBER') {
    return <NumberTextField field={field} />;
  }
  return field.text;
};

export const FieldLabelText = props => {
  const { classes, field } = { ...props };
  const hasContent = field.text !== undefined && field.text !== null && field.text !== '';
  const text = getContent(field);
  return (
    <div className={classes.fieldLinkContainer}>
      <span className={classes.fieldLinkTitle}>{field.label}</span>
      {hasContent && field.type === 'URL' && (
        <a target="_blank" rel="noopener noreferrer" href={makeUrl(field.text)}>
          {text}
        </a>
      )}
      {hasContent && field.type !== 'URL' && <div>{text}</div>}
      {!hasContent && <span>-</span>}
    </div>
  );
};

export const FieldTextLabel = withStyles(styles)(props => {
  const { classes, field } = { ...props };
  const hasContent = field.text !== undefined && field.text !== null && field.text !== '';
  const text = getContent(field);
  return (
    <div>
      <div
        className={classes.hexagon}
        style={{ color: field.valueTextColor, backgroundColor: field.valueBackgroundColor }}
      >
        {hasContent && <span>{text}</span>}
        {!hasContent && <span>-</span>}
      </div>
      <div className={classes.labelValue}>{field.label}</div>
    </div>
  );
});

export const FieldIconText = props => {
  const { classes, field } = { ...props };

  return (
    <div className={classes.iconTextWrap}>
      <BobjectField className={classes.fieldText} field={field} multiline />
    </div>
  );
};
