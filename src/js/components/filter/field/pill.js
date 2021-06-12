import React from 'react';
import { withStyles } from '@material-ui/core';
import { bobjectModel } from '../../../misc/model/bobjectFieldsModel';
import { Label } from '@bloobirds-it/bloobirds-platform-component-library';

const style = {
  pill: {
    display: 'inline-block',
    padding: '4px 16px',
    textAlign: 'center',
    fontSize: '13px',
    borderRadius: '4px',
    marginRight: '4px',
    border: '2px solid',
    textTransform: 'uppercase',
  },
};
export const Pill = withStyles(style)(props => {
  const { classes, content, textColor, backgroundColor, fontWeight } = { ...props };
  const borderColor = props.borderColor === undefined ? backgroundColor : props.borderColor;
  if (content === undefined || content === '' || content === null) {
    return <React.Fragment />;
  }
  return (
    <div
      className={classes.pill}
      style={{
        backgroundColor,
        color: textColor,
        borderColor,
        fontWeight,
      }}
    >
      {content}
    </div>
  );
});

export const BobjectFieldPill = ({ field }) => {
  const content = field.text;
  const backgroundColor = field.valueBackgroundColor;
  const color = field.valueTextColor;
  const borderColor = field.valueOutlineColor;
  if (content) {
    return (
      <Label
        dataTest={`${field.text}`}
        overrideStyle={{
          backgroundColor,
          color,
          borderColor,
        }}
      >
        {content}
      </Label>
    );
  }
  return <></>;
};

export const BobjectPill = props => {
  const { bobject, fieldDescriptor } = { ...props };
  const model = bobjectModel(bobject);
  const field = model.find(fieldDescriptor);
  return field.text ? <BobjectFieldPill field={field} /> : <></>;
};
