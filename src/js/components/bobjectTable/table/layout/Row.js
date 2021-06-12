import React from 'react';
import { cssVariables } from '../../../../style/variables';
import { TableRow, withStyles } from '@material-ui/core';
import { bobjectModel } from '../../../../misc/model/bobjectFieldsModel';
import Cell from './Cell';
import RowActions from '../../actionsRow/ActionsRow';
import { bobjectUrl } from '../../../../app/_constants/routes';
import { withWrappers } from '../../../../misc/utils';
import { BobjectFieldPill } from '../../../filter/field/pill';
import { DateTextField, NumberTextField, PhoneTextField } from '../../../filter/field/field';
import { getRelatedBobject, getValueFromLogicRole } from '../../../../utils/bobjects.utils';
import {
  useEntity,
  useContextMenu,
  usePreviousUrl,
  useRouter,
  useBobjectDetails,
  useBobjectFormVisibility,
} from '../../../../hooks';
import RightClickContextMenu from '../../../rightClickContextMenu';
import { BOBJECT_TYPES } from '../../../../constants/bobject';

const NAME_FIELD_LOGIC_ROLE = [
  'COMPANY__NAME',
  'LEAD__FULL_NAME',
  'OPPORTUNITY__COMPANY',
  'OPPORTUNITY__NAME',
];

const radius = 4;
const border = `solid 1px ${cssVariables.color.grey.veryLight}`;

export const rowStyle = {
  root: {
    borderRadius: '4px',
    color: cssVariables.color.black.natural,
    backgroundColor: cssVariables.color.white.natural,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:hover *': {
      visibility: 'visible !IMPORTANT',
    },
    '&:first-child': {
      '& td:first-child': {
        borderTop: border,
        borderLeft: border,
        borderBottom: border,
        borderTopLeftRadius: radius,
      },
      '& td:last-child': {
        borderTop: border,
        borderRight: border,
        borderBottom: border,
        borderTopRightRadius: radius,
      },
    },
    '&:last-child': {
      '& td:first-child': {
        borderBottomLeftRadius: radius,
      },
      '& td:last-child': {
        borderBottomRightRadius: radius,
      },
    },
    '& td:first-child': {
      borderTop: border,
      borderLeft: border,
      borderBottom: border,
      borderBottomLeftRadius: radius,
    },
    '& td:last-child': {
      borderTop: border,
      borderRight: border,
      borderBottom: border,
      borderBottomRightRadius: radius,
    },
    '& td:not(first-child), td:not(last-child)': {
      borderTop: border,
      borderBottom: border,
    },
  },
};

const getBobjectUrl = (bobjectParam, bobjectType) => {
  const bobjectNeedReference = [
    BOBJECT_TYPES.ACTIVITY,
    BOBJECT_TYPES.TASK,
    BOBJECT_TYPES.OPPORTUNITY,
    BOBJECT_TYPES.LEAD,
  ];
  const { name: bobjectTypeName = '' } = bobjectType;
  let url;
  let bobject = bobjectParam;

  if (bobjectNeedReference.includes(bobjectTypeName)) {
    let referencedBobject = getRelatedBobject(bobject, BOBJECT_TYPES.COMPANY);
    referencedBobject = referencedBobject || getRelatedBobject(bobject, BOBJECT_TYPES.LEAD);
    bobject = referencedBobject;
  }
  if (bobject || bobjectParam) {
    url =
      bobjectTypeName === BOBJECT_TYPES.OPPORTUNITY || bobjectTypeName === BOBJECT_TYPES.LEAD
        ? bobjectUrl(bobjectParam, bobject)
        : bobjectUrl(bobject);
  }
  return url;
};

const onClickRow = (
  event,
  history,
  setPreviousUrl,
  { bobject, bobjectType, openEditModal, rowClick },
) => {
  const {
    target: {
      dataset: { excludeHandler },
    },
  } = event;
  const fieldCompany = getValueFromLogicRole(bobject, 'ACTIVITY__COMPANY');
  const fieldLead = getValueFromLogicRole(bobject, 'ACTIVITY__LEAD');
  const emptyActivity = bobjectType.name === BOBJECT_TYPES.ACTIVITY && !fieldCompany && !fieldLead;
  if (excludeHandler) {
    event.preventDefault();
    event.stopPropagation();
  } else if (rowClick === 'openForm') {
    event.preventDefault();
    openEditModal({ bobject });
  } else if (!emptyActivity && (event.ctrlKey || event.metaKey)) {
    window.open(getBobjectUrl(bobject, bobjectType), '_blank');
  } else if (emptyActivity) {
    event.preventDefault();
  } else {
    history.push(getBobjectUrl(bobject, bobjectType));
    document.querySelector('#content').scroll({ top: 0 });
  }
};

const NameField = withStyles({
  root: {
    color: `${cssVariables.color.bloobirds.natural} !IMPORTANT`,
    textDecoration: 'none',
    display: 'inline-block',
  },
})(({ classes, text, bobject }) => {
  const { openBobjectDetails, setBobjectDetails } = useBobjectDetails();
  return (
    <div
      data-test={`TableCell-${bobject?.id.typeName}_Name_${text}`}
      className={classes.root}
      data-exclude-handler="name"
      onClick={event => {
        setBobjectDetails({ bobject, showContactButton: true });
        openBobjectDetails();
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      {text || `Untitled ${bobject?.id.typeName}`}
    </div>
  );
});

const getField = (bobject, bobjectField, bobjectType, bobjectTypes, model) => {
  let field;
  let isReference = false;
  // Case the field belongs to a referenced bobject
  if (bobjectType.id !== bobjectField.bobjectType) {
    const referencedBobject = getRelatedBobject(
      bobject,
      bobjectTypes.get(bobjectField.bobjectType).name,
    );
    // 2. find the field
    if (referencedBobject) {
      field = bobjectModel(referencedBobject).findById(bobjectField.id);
      isReference = true;
    }
  } else {
    // case: the fields belongs to the object itself
    field = model.findById(bobjectField.id);
  }
  if (field === undefined) {
    return '';
  }

  return {
    isReference,
    field,
  };
};

const getReferencedBobjectText = referencedBobjectFields =>
  referencedBobjectFields?.find(
    referencedBobjectField =>
      referencedBobjectField.logicRole === 'COMPANY__NAME' ||
      referencedBobjectField.logicRole === 'LEAD__FULL_NAME',
  )?.text;

const display = (bobject, bobjectField, bobjectType, bobjectTypes, model) => {
  const { isReference, field } = getField(bobject, bobjectField, bobjectType, bobjectTypes, model);

  if (!field) {
    return null;
  }

  if (field.valueBackgroundColor !== null && field.valueBackgroundColor !== undefined) {
    return <BobjectFieldPill field={field} />;
  }
  if (NAME_FIELD_LOGIC_ROLE.includes(field.logicRole) && !isReference) {
    return (
      <NameField
        text={
          bobjectType.name === BOBJECT_TYPES.OPPORTUNITY &&
          field.logicRole === 'OPPORTUNITY__COMPANY'
            ? getReferencedBobjectText(field.referencedBobject?.fields)
            : field.text
        }
        bobject={
          bobjectType.name === BOBJECT_TYPES.OPPORTUNITY &&
          field.logicRole === 'OPPORTUNITY__COMPANY'
            ? getRelatedBobject(bobject, BOBJECT_TYPES.COMPANY)
            : bobject
        }
      />
    );
  }
  if (field.type === 'DATE' || field.type === 'DATETIME') {
    return <DateTextField field={field} />;
  }
  if (field.type === 'NUMBER') {
    return <NumberTextField field={field} />;
  }
  if (field.type === 'PHONE') {
    return <PhoneTextField field={field} />;
  }
  if (field.type === 'REFERENCE') {
    if (!field.referencedBobject) {
      return '';
    }
    return getReferencedBobjectText(field.referencedBobject.fields);
  }
  return field.text;
};

export const Row = withWrappers({ style: rowStyle })(props => {
  const {
    bobject,
    bobjectFields,
    classes,
    actionsRow,
    bobjectType,
    rowClick,
    dataTest: dataTestRow,
  } = props;
  const bobjectTypes = useEntity('bobjectTypes');
  const model = bobjectModel(bobject);
  const { history } = useRouter();
  const {
    ref,
    xPos,
    yPos,
    isContextMenuVisible,
    handleContextMenu,
    hideContextMenu,
  } = useContextMenu();
  const { openEditModal } = useBobjectFormVisibility();
  const { setPreviousUrl } = usePreviousUrl();
  const fieldCompany = getValueFromLogicRole(bobject, 'ACTIVITY__COMPANY');
  const fieldLead = getValueFromLogicRole(bobject, 'ACTIVITY__LEAD');
  const emptyActivity = bobjectType.name === BOBJECT_TYPES.ACTIVITY && !fieldCompany && !fieldLead;

  return (
    <TableRow
      className={classes.root}
      onClick={event =>
        onClickRow(event, history, setPreviousUrl, {
          bobject,
          bobjectType,
          openEditModal,
          rowClick,
        })
      }
      onContextMenu={handleContextMenu}
      onMouseDown={event => {
        if (event.button === 1 && !emptyActivity) {
          window.open(getBobjectUrl(bobject, bobjectType), '_blank');
          event.preventDefault();
        }
      }}
      ref={ref}
    >
      {bobjectTypes &&
        bobjectFields?.map((bobjectField, index) => {
          const key = bobjectField.name.replace(/(\s)+/, '_').concat(`_${index}`);
          const dataTest = `${dataTestRow}_${bobjectType.name}_${bobjectField.name}`;
          let actions;
          if (actionsRow !== undefined && index === 0) {
            actions = <RowActions bobject={bobject} actionsRow={actionsRow} />;
          }
          return (
            <Cell key={key} actions={actions} dataTest={dataTest}>
              {display(bobject, bobjectField, bobjectType, bobjectTypes, model)}
            </Cell>
          );
        })}
      {isContextMenuVisible && !emptyActivity && (
        <RightClickContextMenu
          url={getBobjectUrl(bobject, bobjectType)}
          xPos={xPos}
          yPos={yPos}
          hideContextMenu={hideContextMenu}
        />
      )}
    </TableRow>
  );
});
