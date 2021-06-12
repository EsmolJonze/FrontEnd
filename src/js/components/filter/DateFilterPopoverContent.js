import React, { useState } from 'react';
import { Button, FormControl, Grid, InputAdornment, Paper, Tab, Tabs } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import classNames from 'clsx';
import { cssVariables } from '../../style/variables';
import { DatePicker } from 'material-ui-pickers';
import withStyles from '@material-ui/core/styles/withStyles';
// eslint-disable-next-line import/named
import { relativeDates } from './RelativeDates';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';

const style = {
  dateModalPaper: {
    padding: '16px',
    width: '340px',
    height: '340px',
    borderRadius: '4px',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)',
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    width: 170,
    minWidth: '50%',
    '& > div': {
      maxWidth: 170,
      width: '100%',
    },
  },
  radioIcon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    opacity: 0.4,
    backgroundColor: cssVariables.color.white,
    border: `solid 1px ${cssVariables.color.bloobirds.natural}`,
  },
  checkedRadio: {
    backgroundColor: cssVariables.color.bloobirds.natural,
    opacity: 1,
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      content: '""',
    },
  },
};
const TabPanel = props => {
  const { children } = props;

  return children;
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const customDatePickerStyle = {
  dateField: {
    width: '240px',
  },
  datePickerInput: {
    underline: {
      color: cssVariables.color.gunmetal.light,
      '&:hover:not($disabled):before': {
        backgroundColor: cssVariables.color.bloobirds.light,
      },
    },
  },
  calendarIcon: {
    width: '20px',
    height: '20px',
    color: cssVariables.color.gunmetal.light,
  },
};

const CustomDatePicker = withStyles(customDatePickerStyle)(
  ({ classes, label, value, onChange, max, min, fullWidth }) => (
    <DatePicker
      name={label}
      value={value}
      clearable
      label={label}
      onChange={onChange}
      minDate={min || undefined}
      maxDate={max || undefined}
      className={classes.dateField}
      fullWidth={fullWidth}
      format="d MMM yyyy"
      InputProps={{
        endAdornment: (
          <InputAdornment position={'end'}>
            <div className={classes.calendarIcon}>
              <Icon name="calendar" color="softPeanut" />
            </div>
          </InputAdornment>
        ),
        fullWidth: true,
        classes: classes.datePickerInput,
      }}
    />
  ),
);

const DateFilterPopoverContent = props => {
  const {
    classes,
    radioValue,
    setRadioValue,
    to,
    setTo,
    from,
    setFrom,
    handleAccept,
    handleCleanDates,
  } = props;
  const [tabValue, setTabValue] = useState(0);
  const tabsActions = React.useRef();
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangeIndex = index => {
    setTabValue(index);
  };

  const handleChangeFrom = data => {
    setFrom(data);
    setRadioValue('');
  };

  const handleChangeTo = data => {
    setTo(data);
    setRadioValue('');
  };

  const handleChangeRadio = event => {
    setFrom(null);
    setTo(null);
    setRadioValue(event.target.value);
  };

  return (
    <Paper className={classes.dateModalPaper}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        action={tabsActions}
        classes={{ indicator: classes.indicator }}
      >
        <Tab
          label="Defaults"
          {...a11yProps(0)}
          style={{ fontSize: '16px', textTransform: 'capitalize' }}
        />
        <Tab
          label="Custom"
          {...a11yProps(1)}
          style={{ fontSize: '16px', textTransform: 'capitalize' }}
        />
      </Tabs>
      <SwipeableViews axis={'x'} index={tabValue} onChangeIndex={handleChangeIndex}>
        <TabPanel value={tabValue} index={0} dir={'x'}>
          <FormControl
            component="fieldset"
            className={classes.formControl}
            style={{ padding: '16px' }}
          >
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={radioValue}
              onChange={handleChangeRadio}
            >
              <Grid container direction="row">
                {Object.entries(relativeDates).map(([key, label]) => (
                  <Grid item xs="6" key={key}>
                    <FormControlLabel
                      value={key}
                      control={
                        <Radio
                          disableRipple
                          color="default"
                          checkedIcon={
                            <span className={classNames(classes.radioIcon, classes.checkedRadio)} />
                          }
                          icon={<span className={classes.radioIcon} />}
                          {...props}
                        />
                      }
                      style={{ color: cssVariables.color.gunmetal.medium }}
                      label={label}
                    />
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
          </FormControl>
        </TabPanel>
        <TabPanel value={tabValue} index={1} dir={'x'}>
          <Grid container direction="column" spacing={2} style={{ padding: '50px' }}>
            <Grid item xs={6}>
              <CustomDatePicker
                label="From"
                value={from}
                max={to}
                onChange={handleChangeFrom}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <CustomDatePicker label="To" value={to} min={from} onChange={handleChangeTo} />
            </Grid>
          </Grid>
        </TabPanel>
      </SwipeableViews>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={6}>
          <Button
            fullWidth
            classes={{ label: { fontWeight: 'lighter' } }}
            onClick={handleCleanDates}
          >
            Clean dates
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            classes={{ label: { fontWeight: 'lighter' } }}
            color="primary"
            variant="contained"
            fullWidth
            onClick={handleAccept}
          >
            Accept
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(style)(DateFilterPopoverContent);
