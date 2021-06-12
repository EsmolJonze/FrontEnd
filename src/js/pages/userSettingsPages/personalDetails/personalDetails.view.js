import {
  Icon,
  Text,
  Select,
  Item,
  Button,
  useToasts,
  Input,
} from '@bloobirds-it/bloobirds-platform-component-library';
import React, { useEffect, useState } from 'react';
import { ServiceApi } from '../../../misc/api/service';
import { ColorPicker } from '../../../components/colorPicker/index';
import TimeZoneChangeModal from './timeZoneChangeModal.view';
import styles from './personalDetails.module.css';
import { useTimeZones } from '../../../hooks/useTimeZones';

const validate = ({ name }) => name !== undefined && name !== null && name.length > 0;

const foundChanges = ({
  inputName,
  inputColor,
  inputShortname,
  inputTimeZone,
  name,
  color,
  shortname,
  timezone,
}) =>
  inputName !== name ||
  inputShortname !== shortname ||
  color !== inputColor ||
  timezone !== inputTimeZone;

const PersonalDetails = ({ name, shortname, color, timezone, onSubmit }) => {
  const originalTimeZoneValue = timezone;
  const [open, setOpen] = useState(false);
  const timeZones = useTimeZones();
  const [selectedTimeZoneValue, setSelectedTimeZoneValue] = useState(originalTimeZoneValue);
  const [inputName, setInputName] = useState(name);
  const [inputShortname, setInputShortname] = useState(shortname);
  const [inputColor, setInputColor] = useState(color);
  const [inputTimeZone, setInputTimeZone] = useState(timezone);
  const [validated, setValidated] = useState(validate({ name: inputName }));
  const [exec, setExec] = useState(false);
  const { createToast } = useToasts();
  const [timeZoneChanged] = useState(true);
  const [buttonSubmitDisabled, setButtonSubmitDisabled] = useState(true);
  const [hasChanges, setHasChanges] = useState(
    foundChanges({
      inputName,
      inputColor,
      inputShortname,
      name,
      color,
      shortname,
    }),
  );
  useEffect(() => {
    const newValidated = validate({ name: inputName });
    if (newValidated !== validated) {
      setValidated(newValidated);
    }
  }, [inputName]);

  useEffect(() => {
    const newHasChanges = foundChanges({
      inputName,
      inputColor,
      inputShortname,
      name,
      color,
      shortname,
    });
    if (newHasChanges !== hasChanges) {
      setHasChanges(newHasChanges);
    }
  }, [inputName, inputColor, inputShortname, inputTimeZone, name, color, shortname]);
  useEffect(() => {
    if (exec) {
      setExec(false);
      ServiceApi.request({
        url: '/service/users/me',
        method: 'POST',
        body: {
          name: inputName,
          shortname: inputShortname,
          color: inputColor,
          timeZone: inputTimeZone,
        },
      }).then(() => {
        if (onSubmit) {
          createToast({ type: 'success', message: 'Your settings have been updated!' });
          onSubmit();
          setButtonSubmitDisabled(true);
        }
      });
    }
  }, [exec]);

  useEffect(() => {
    if (!validated || hasChanges || !timeZoneChanged) {
      setButtonSubmitDisabled(false);
    }
  }, [validated, hasChanges, timeZoneChanged]);

  const handleToggle = () => setOpen(!open);
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    if (!exec) {
      setExec(true);
      setButtonSubmitDisabled(true);
    }
    handleClose();
  };

  return (
    <>
      <div className={styles._container} data-intercom="user-settings-page-personal-details">
        <div className={styles._content}>
          <div className={styles._sectionVertical}>
            <div>
              <Text color="softPeanut" size="m">
                Personal details
              </Text>
            </div>
            <Input
              id="personal-details-name-field"
              width="100%"
              label="Name"
              variant="outlined"
              value={inputName}
              onChange={e => setInputName(e.target.value)}
            />
            <div className={styles._sectionHorizontal}>
              <Input
                label="Shortname"
                variant="outlined"
                value={inputShortname}
                onChange={e => setInputShortname(e.target.value)}
              />
              <ColorPicker
                label="Color"
                variant="outlined"
                value={inputColor}
                onChange={e => setInputColor(e)}
              />
            </div>
            <div className={styles.dropDownDiv}>
              <div className={styles.textAndIcon}>
                <Text color="softPeanut" size="m">
                  Time Zone
                </Text>
                <div className={styles.iconMargin}>
                  <Icon size="20" name={'infoFilled'} />
                </div>
              </div>
              <Select
                onChange={newValue => {
                  setSelectedTimeZoneValue(timeZones.find(opt => opt.location === newValue).name);
                  setInputTimeZone(newValue);
                  setButtonSubmitDisabled(false);
                }}
                defaultValue={inputTimeZone}
                width="100%"
                placeholder="Time Zone"
                autocomplete
              >
                {timeZones?.map(tz => (
                  <Item label={tz.name} key={tz.location} value={tz.location}>
                    {tz.name}
                  </Item>
                ))}
              </Select>
            </div>
          </div>
          <div>
            <Button
              variant="primary"
              expand
              disabled={buttonSubmitDisabled}
              onClick={() => {
                if (originalTimeZoneValue !== selectedTimeZoneValue) {
                  handleToggle();
                } else if (!buttonSubmitDisabled && !exec) {
                  setExec(true);
                }
              }}
            >
              save changes
            </Button>
          </div>
        </div>
      </div>
      <TimeZoneChangeModal
        open={open}
        close={handleClose}
        save={handleSave}
        name={selectedTimeZoneValue}
        location={inputTimeZone}
      />
    </>
  );
};

export default PersonalDetails;
