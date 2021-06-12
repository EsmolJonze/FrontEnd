import React, { useEffect, useState } from 'react';
import { eachDayOfInterval, max, min } from 'date-fns';
import { FormControl, Grid } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import { cssVariables } from '../../style/variables';
import withStyles from '@material-ui/core/styles/withStyles';
import DateFilterPopoverContent from './DateFilterPopoverContent';
import { relativeDates, transformDate } from './RelativeDates';
import { Input } from '@bloobirds-it/bloobirds-platform-component-library';

const style = {
  calendarIcon: {
    width: '20px',
    height: '20px',
    color: cssVariables.color.gunmetal.light,
  },
  root: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '75%',
  },
};

const DateFilterComponent = ({ id, label, onChange, value }) => {
  const initialValue = useState(value)[0];
  const [alreadyMounted, setAlreadyMounted] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [radioValue, setRadioValue] = useState('');
  const [to, setTo] = useState(null);
  const [from, setFrom] = useState(null);
  const idName = `field-input-${id}`;
  const [filterValue, setFilterValue] = useState('');
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccept = () => {
    if (radioValue) {
      setFilterValue(relativeDates[radioValue]);
    } else {
      let filterText = transformDate(from);
      if (to) {
        filterText = `${transformDate(from)} to ${transformDate(to)}`;
      }
      setFilterValue(filterText);
    }
    setAnchorEl(null);
  };

  const handleCleanDates = () => {
    setTo(null);
    setFrom(null);
    setFilterValue('');
    setRadioValue(null);
    setAnchorEl(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (
      initialValue !== null &&
      initialValue !== undefined &&
      initialValue !== '' &&
      initialValue !== []
    ) {
      const isRelativeDate =
        Array.isArray(initialValue) && initialValue.length === 1 && relativeDates[initialValue[0]];
      if (isRelativeDate) {
        setFilterValue(relativeDates[initialValue[0]]);
        setRadioValue(initialValue[0]);
      } else {
        const valueAsDate = initialValue.map(v => new Date(v));
        let filterText;
        const f = min(valueAsDate);
        let t = null;
        setFrom(f);
        filterText = transformDate(f);
        if (valueAsDate.length > 1) {
          t = max(valueAsDate);
          filterText = `${transformDate(f)} to ${transformDate(t)}`;
          setTo(t);
        }
        setFilterValue(filterText);
      }
    } else {
      setFilterValue('');
    }
    setAlreadyMounted(true);
  }, [initialValue]);

  useEffect(() => {
    if (from && !to) {
      const dateFormatted = transformDate(from);
      onChange([dateFormatted]);
    }
    if (to && !from) {
      const dateFormatted = transformDate(to);
      onChange([dateFormatted]);
    } else if (from && to) {
      const range = eachDayOfInterval({ start: from, end: to }).map(transformDate);
      onChange(range);
    } else if (radioValue) {
      const range = [radioValue];
      onChange(range);
    } else if (!from && !to && !radioValue && alreadyMounted) {
      onChange(undefined);
    }
  }, [from, to, radioValue]);

  useEffect(() => {
    if (!initialValue && (from || to)) {
      setFrom(null);
      setTo(null);
    }
  }, [initialValue]);

  return (
    <Grid item>
      <FormControl variant="outlined" fullWidth>
        <Input
          dataTest={label}
          icon="calendar"
          name={idName}
          onClick={handleClick}
          placeholder={label}
          value={filterValue}
          width={220}
        />
      </FormControl>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        elevation={2}
      >
        <DateFilterPopoverContent
          from={from}
          to={to}
          radioValue={radioValue}
          setFrom={setFrom}
          setTo={setTo}
          setRadioValue={setRadioValue}
          handleAccept={handleAccept}
          handleCleanDates={handleCleanDates}
        />
      </Popover>
    </Grid>
  );
};

export default withStyles(style)(DateFilterComponent);
