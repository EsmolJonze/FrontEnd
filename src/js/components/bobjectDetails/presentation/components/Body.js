import { bobjectFieldsModel } from '../../../../misc/model/bobjectFieldsModel';
import React, { useState } from 'react';
import { Collapse, makeStyles } from '@material-ui/core';
import { FieldIconText, FieldLabelText, FieldTextLabel } from '../../groupNameFields';
import { cssVariables } from '../../../../style/variables';
import classNames from 'clsx';
import CadenceTable from '../../../cadenceTable';
import { COMPANY_FIELDS_LOGIC_ROLE } from '../../../../constants/company';
import { OPPORTUNITY_FIELDS_LOGIC_ROLE } from '../../../../constants/opportunity';
import { Button, Icon, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { getFieldByLogicRole } from '../../../../utils/bobjects.utils';
import {
  useBobjectDetailsVisibility,
  useCadenceControl,
  useRouter,
  useTargetMarket,
} from '../../../../hooks';
import { companyUrl } from '../../../../app/_constants/routes';
import { BOBJECT_TYPES } from '../../../../constants/bobject';
import { useUserSettings } from '../../../userPermissions/hooks';

const useFieldsStyles = makeStyles({
  fieldsValue: {
    display: 'block',
    fontSize: '14px',
    margin: '0 44px 16px 0',
    color: cssVariables.color.gunmetal.natural,
  },
  fieldRatingValue: {
    fontSize: '14px',
    width: '100px',
    margin: '0 0 16px',
    textAlign: 'center',
    color: cssVariables.color.gunmetal.natural,
  },
});

const useFieldLabelStyles = makeStyles({
  fieldLinkTitle: {
    marginBottom: '3px',
    color: cssVariables.color.gunmetal.light,
  },
  fieldLinkContainer: {
    display: 'flex',
    flexFlow: 'column',
  },
});

const useFieldIconTextStyles = makeStyles({
  fieldText: {
    marginLeft: 0,
  },
});

const useListElementStyles = makeStyles({
  groupContainer: {
    width: '463px',
    padding: '8px 24px 14px',
    borderBottom: `1px solid ${cssVariables.color.gunmetal.veryLight}`,
  },
  groupNameTitle: {
    fontSize: '13px',
    color: cssVariables.color.bloobirds.natural,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
    '& > span': {
      height: 13,
      marginLeft: 8,
    },
    '& > svg': {
      fontSize: 18,
      transition: 'transform .4s cubic-bezier(0.41, 0.26, 0.09, 0.88)',
    },
  },
  svgTransformation: {
    transform: 'rotate(90deg)',
  },
  fieldGroupCard: {
    display: 'flex',
    width: '443px',
    flexDirection: 'column',
  },
});

const useBodyStyle = makeStyles({
  bodyWrapper: {
    flexGrow: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  bodyContainer: {
    display: 'flex',
    flexFlow: 'wrap',
    flexDirection: 'row',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
});

const Fields = ({ classes, fieldGroup }) => {
  let content = '';
  if (
    fieldGroup.meta.detailDisplay === 'FIELD_LABEL_TEXT' ||
    fieldGroup.meta.detailDisplay === null ||
    fieldGroup.meta.detailDisplay === undefined
  ) {
    content = fieldGroup.fields.map(field => (
      <div className={classes.fieldsValue} key={`field-${field.name}`}>
        <FieldLabelText classes={useFieldLabelStyles()} field={field} />
      </div>
    ));
  } else if (fieldGroup.meta.detailDisplay === 'FIELD_ICON_TEXT') {
    content = fieldGroup.fields.map(field => (
      <div className={classes.fieldsValue} key={`field-${field.name}`}>
        <FieldIconText fieldGroup={fieldGroup} classes={useFieldIconTextStyles()} field={field} />
      </div>
    ));
  } else if (fieldGroup.meta.detailDisplay === 'FIELD_BIG_SEAL') {
    content = fieldGroup.fields.map(field => (
      <React.Fragment key={`field-${field.name}`}>
        <div className={classes.fieldRatingValue}>
          <FieldTextLabel field={field} />
        </div>
      </React.Fragment>
    ));
  }
  return <React.Fragment>{content}</React.Fragment>;
};

const ListCollapsable = props => {
  const { title, children, isFirst } = props;
  const classes = useListElementStyles();
  const [collapsed, setCollapsed] = useState(isFirst);
  const handleCollapse = () => setCollapsed(!collapsed);
  return (
    <div className={classes.groupContainer}>
      <h2 className={classes.groupNameTitle} onClick={handleCollapse}>
        <div className={classNames({ [classes.svgTransformation]: collapsed })}>
          <Icon name="chevronDown" color="softPeanut" />
        </div>
        <span>{title}</span>
      </h2>
      <Collapse in={collapsed}>
        <div className={classes.fieldGroupCard}>{children}</div>
      </Collapse>
    </div>
  );
};

const FieldListCollapsable = props => {
  const { fieldGroup, showMoreIsExpanded, handleShowMore, handleShowLess, isFirst } = props;

  return (
    <ListCollapsable title={fieldGroup.name} isFirst={isFirst}>
      <Fields
        classes={useFieldsStyles()}
        fieldGroup={fieldGroup}
        showMoreIsExpanded={showMoreIsExpanded}
        handleShowMore={handleShowMore}
        handleShowLess={handleShowLess}
      />
    </ListCollapsable>
  );
};

const Body = ({ bobject, showMoreIsExpanded, handleShowMore, handleShowLess }) => {
  const { history } = useRouter();
  const { openCadenceControl } = useCadenceControl();
  const { closeBobjectDetails } = useBobjectDetailsVisibility();
  const model = bobjectFieldsModel(bobject.fields);
  const uncheckedFieldGroups = model.groupFieldsByGroup(bobject.fields);
  const fieldGroups = uncheckedFieldGroups.map(fieldGroup => ({
    ...fieldGroup,
    fields: fieldGroup.fields.map(field =>
      field.referencedBobject !== undefined
        ? {
            ...field,
            text: field.referencedBobject.fields.find(
              fieldItem =>
                fieldItem.logicRole === COMPANY_FIELDS_LOGIC_ROLE.NAME ||
                fieldItem.logicRole === OPPORTUNITY_FIELDS_LOGIC_ROLE.NAME,
            )?.text,
          }
        : field,
    ),
  }));
  const classes = useBodyStyle();
  const bobjectType = bobject.id.typeName;
  const isCompany = bobjectType === 'Company';

  const settings = useUserSettings();
  const companyTargetMarket =
    isCompany && getFieldByLogicRole(bobject, COMPANY_FIELDS_LOGIC_ROLE.TARGET_MARKET).text;
  const defaultCadence =
    bobjectType === BOBJECT_TYPES.COMPANY
      ? useTargetMarket(companyTargetMarket)?.name
      : settings?.opportunityDefaultCadenceName;
  const LOGIC_ROLES =
    bobjectType === BOBJECT_TYPES.OPPORTUNITY
      ? OPPORTUNITY_FIELDS_LOGIC_ROLE
      : COMPANY_FIELDS_LOGIC_ROLE;
  const cadenceName = getFieldByLogicRole(bobject, LOGIC_ROLES.CADENCE)?.text;
  const hasCadence = cadenceName || defaultCadence;

  return (
    <div className={classes.bodyWrapper}>
      <div className={classes.bodyContainer}>
        {isCompany && (
          <ListCollapsable isFirst title="CADENCE">
            {hasCadence ? (
              <CadenceTable company={bobject} offsetDays={-1} bobjectType={bobjectType} />
            ) : (
              <div
                style={{
                  padding: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  alignItems: 'center',
                }}
              >
                <Text size="m" align="center" color="softPeanut">
                  No cadence selected, choose one to start prospecting
                </Text>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => {
                    const path = companyUrl(bobject);
                    history.push(path);
                    openCadenceControl({ previousStep: false });
                    closeBobjectDetails();
                  }}
                >
                  CONFIGURE CADENCE
                </Button>
              </div>
            )}
          </ListCollapsable>
        )}
        {fieldGroups.map((fieldGroup, index) => (
          <React.Fragment key={`field-group-${fieldGroup.name}`}>
            <FieldListCollapsable
              key={`list-element-${fieldGroup.name}`}
              handleShowMore={handleShowMore}
              handleShowLess={handleShowLess}
              fieldGroup={fieldGroup}
              showMoreIsExpanded={showMoreIsExpanded}
              isFirst={!isCompany && index === 0}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Body;
