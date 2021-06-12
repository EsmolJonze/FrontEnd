import React from 'react';
import { withStyles } from '@material-ui/core';
import { cssVariables } from '../../../style/variables';
import CustomTooltip from '../../CustomTooltip';

const style = {
  field: {
    height: '18px',
    marginRight: '4px',
    display: 'inline-flex',
  },
  fieldContent: {
    marginLeft: '8px',
    fontSize: '14px',
    lineHeight: '18px',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  fieldCircle: {
    height: '12px',
    width: '12px',
    borderRadius: '100px',
    backgroundColor: cssVariables.color.white.natural,
    margin: 'auto',
  },
};
export const ColorField = withStyles(style)(props => {
  const { classes, content, color, tooltip } = { ...props };
  if (content !== undefined && content !== null && content !== '') {
    return (
      <CustomTooltip title={tooltip || content} placement="top">
        <div className={classes.field}>
          <span className={classes.fieldCircle} style={{ backgroundColor: color }} />
          <div className={classes.fieldContent}>{content}</div>
        </div>
      </CustomTooltip>
    );
  }
  return <span />;
});

export const BobjectFieldColorField = props => {
  const { field } = { ...props };
  const content = field.text ? field.text : field.value;
  const color = field.valueBackgroundColor ? field.valueBackgroundColor : field.backgroundColor;
  const tooltip = field.label ? `${field.label}: ${field.text}` : field.valueWithField;

  return <ColorField content={content} tooltip={tooltip} color={color} />;
};
