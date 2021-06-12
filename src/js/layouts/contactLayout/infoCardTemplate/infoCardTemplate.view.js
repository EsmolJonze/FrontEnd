import React, { useEffect, useState } from 'react';
import {
  CircularBadge,
  Icon,
  IconButton,
  Label,
  Text,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import classnames from 'clsx';
import { useHover, useAccountUsers } from '../../../hooks';
import { addProtocol } from '../../../utils/url.utils';
import { formatDateAsText } from '../../../utils/dates.utils';
import { getValueFromLogicRole } from '../../../utils/bobjects.utils';
import { getTimezone } from '../../../constants/countryToTimeZone';
import { parseDate, parseNumber, parsePhone } from './infoCardTemplate.utils';
import { ICON_NAMES } from './infoCardTemplate.constants';
import styles from './infoCardTemplate.module.css';

const EXCEPTION_LOGIC_ROLE = [
  /[A-Z]*__ATTEMPTS_COUNT/,
  /[A-Z]*__ATTEMPTS_LAST_DAY/,
  /[A-Z]*__TOUCHES_COUNT/,
  /[A-Z]*__TOUCHES_LAST_DAY/,
  /[A-Z]*__COUNTRY/,
  /[A-Z]*__CLOSE_DATE/,
  /[A-Z]*__CREATION_DATE/,
];

const addTextToField = field => {
  let fieldText;
  switch (true) {
    case /[A-Z]*__ATTEMPTS_COUNT/.test(field?.logicRole):
      fieldText = `${field?.text ? parseInt(field?.text, 10) : 0} attempts`;
      break;
    case /[A-Z]*__ATTEMPTS_LAST_DAY/.test(field?.logicRole):
      fieldText = `Last attempt, ${formatDateAsText(field?.text)}`;
      break;
    case /[A-Z]*__TOUCHES_COUNT/.test(field?.logicRole):
      fieldText = `${field?.text ? parseInt(field?.text, 10) : 0} touches`;
      break;
    case /[A-Z]*__TOUCHES_LAST_DAY/.test(field?.logicRole):
      fieldText = `Last touch, ${formatDateAsText(field?.text)}`;
      break;
    case /[A-Z]*__COUNTRY/.test(field?.logicRole): {
      const timezone = getTimezone(field?.text);
      fieldText = field?.text;
      if (timezone) {
        fieldText = `${fieldText} (${timezone})`;
      }
      break;
    }
    case /[A-Z]*__CLOSE_DATE/.test(field?.logicRole):
      fieldText = `Closes ${formatDateAsText(field?.text, 'MMM do, yyyy')}`;
      break;
    case /[A-Z]*__CREATION_DATE/.test(field?.logicRole):
      fieldText = `Created ${formatDateAsText(field?.text, 'MMM do, yyyy')}`;
      break;
    default:
      break;
  }

  return fieldText;
};

const parseField = field => {
  let parsedField;

  if (EXCEPTION_LOGIC_ROLE.some(regex => regex.test(field?.logicRole))) {
    return addTextToField(field);
  }

  switch (field?.type) {
    case 'NUMBER':
      parsedField = parseNumber(field) || 0;
      break;
    case 'DATETIME':
    case 'DATE':
      parsedField = parseDate(field);
      break;
    case 'PHONE':
      parsedField = parsePhone(field);
      break;
    case 'URL':
      parsedField = addProtocol(field?.text);
      break;
    case 'REFERENCE': {
      const { referencedBobject, referencedBobjectType } = field;
      parsedField = getValueFromLogicRole(
        referencedBobject,
        `${referencedBobjectType.toUpperCase()}__NAME`,
      );
      break;
    }
    case 'DOUBLE':
      parsedField = field?.text;
      break;
    default:
      parsedField = field?.text;
      break;
  }

  return parsedField;
};

const StatusLabelContent = ({ text, backgroundColor, borderColor, color }) => (
  <span className={styles._status__container}>
    <Label
      dataTest="companyStatus"
      overrideStyle={{
        backgroundColor,
        color,
        borderColor,
      }}
    >
      <Text htmlTag="span" color={color} size="s" ellipsis={21}>
        {text}
      </Text>
    </Label>
  </span>
);

const StatusLabel = props => {
  if (props.text.length > 21) {
    return (
      <Tooltip title={props.text} position="top">
        <StatusLabelContent {...props} />
      </Tooltip>
    );
  }

  return <StatusLabelContent {...props} />;
};

const InfoCardTemplate = ({
  assignTo,
  mrRating,
  name,
  status,
  targetMarket,
  highPriority,
  otherFields = [],
  handleOnClickName,
  handleOnClickEdit,
}) => {
  const [ref, isHover] = useHover();
  const [userInfo, setUserInfo] = useState();
  const { accountUsers, getUserId } = useAccountUsers();
  const assignToValue = assignTo?.value;

  useEffect(() => {
    setUserInfo(getUserId(assignToValue));
  }, [accountUsers]);

  return (
    <div className={styles._container}>
      <div className={styles._info__container}>
        {highPriority && <Icon size="20" name="zap" color="banana" />}
        {mrRating?.text && (
          <div className={styles._mr_rating__container}>
            <Label
              overrideStyle={{
                backgroundColor: mrRating?.valueBackgroundColor,
                color: mrRating?.valueTextColor,
                borderColor: mrRating?.valueOutlineColor,
              }}
            >
              {mrRating?.text}
            </Label>
          </div>
        )}
      </div>
      <Tooltip title={targetMarket?.name} position="top">
        <div className={styles._target_market__container}>
          {targetMarket?.shortname && (
            <CircularBadge
              size="large"
              overrideStyle={{ backgroundColor: targetMarket?.color, color: 'white' }}
            >
              {targetMarket?.shortname || ''}
            </CircularBadge>
          )}
        </div>
      </Tooltip>
      <Tooltip title={name?.value} position="top">
        <div ref={ref} className={styles._name__container}>
          <span className={styles._name_text__container} onClick={handleOnClickName}>
            {name?.value && (
              <Text
                size="xl"
                color="bloobirds"
                align="center"
                ellipsis={28}
                dataTest="companyCardName"
              >
                {name?.value}
              </Text>
            )}
          </span>
          <div className={classnames(styles._edit_icon, { [styles._edit_icon__visible]: isHover })}>
            <IconButton
              size="20"
              name="edit"
              dataTest="editCompanyButton"
              onClick={handleOnClickEdit}
            />
          </div>
        </div>
      </Tooltip>
      {status?.text && (
        <StatusLabel
          backgroundColor={status?.valueBackgroundColor}
          color={status?.valueTextColor}
          borderColor={status?.valueOutlineColor}
          text={status?.text}
        />
      )}
      {assignTo && (
        <div className={styles._assignTo__container}>
          {userInfo && (
            <CircularBadge
              size="small"
              overrideStyle={{ backgroundColor: userInfo?.color, color: 'white' }}
            >
              {userInfo?.shortname || ''}
            </CircularBadge>
          )}
          <Text size="s">{assignTo?.text}</Text>
        </div>
      )}
      {otherFields && (
        <div className={styles._fields__container}>
          {otherFields.map(field => (
            <div className={styles._field__container} key={field?.name}>
              <Tooltip title={`${field?.label}: ${parseField(field)}`} position="top">
                <Icon
                  size="16"
                  color="softPeanut"
                  name={ICON_NAMES[(field?.icon)] || field?.icon}
                />
                {field?.type !== 'URL' ? (
                  <Text size="s" color="peanut" ellipsis={30}>
                    {parseField(field)}
                  </Text>
                ) : (
                  <a
                    className={styles._field_link}
                    href={addProtocol(field?.text)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {field?.text}
                  </a>
                )}
              </Tooltip>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoCardTemplate;
