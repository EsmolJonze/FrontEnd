import React from 'react';
import { Button } from '@bloobirds-it/bloobirds-platform-component-library';
import classNames from 'clsx';
import { withWrappers } from '../../../../misc/utils';
import { cssVariables } from '../../../../style/variables';
import { bobjectUrl, companyUrl } from '../../../../app/_constants/routes';
import { useBobjectPermissions } from '../../../userPermissions/hooks';
import { getFieldByLogicRole, getRelatedBobject } from '../../../../utils/bobjects.utils';
import { BOBJECT_TYPES } from '../../../../constants/bobject';
import { LEAD_FIELDS_LOGIC_ROLE } from '../../../../constants/lead';
import { useRouter } from '../../../../hooks';
import constantStyles from '../style';
import { useBobjectFormVisibility } from '../../../../hooks/useBobjectForm';

const dimensionsBtn = {
  width: 216,
  height: 40,
};

const style = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: '0',
    width: constantStyles.footer.width,
    height: constantStyles.footer.height,
    padding: constantStyles.footer.padding,
    backgroundColor: cssVariables.color.white.natural,
    borderTop: `1px solid ${cssVariables.color.bloobirds.veryLight}`,
    zIndex: 4,
  },
  justifyCenter: {
    justifyContent: 'center !IMPORTANT',
  },
  editBtn: {
    ...dimensionsBtn,
  },
  contactBtn: {
    ...dimensionsBtn,
  },
};

const getPath = bobject => {
  let pathUrl = companyUrl(bobject);
  const bobjectTypeName = bobject.id.typeName;

  if (bobjectTypeName === BOBJECT_TYPES.OPPORTUNITY) {
    const relatedBobject = getRelatedBobject(bobject, BOBJECT_TYPES.COMPANY);
    pathUrl = relatedBobject && bobjectUrl(bobject, relatedBobject);
  } else if (bobjectTypeName === BOBJECT_TYPES.LEAD) {
    const companyLead = getFieldByLogicRole(bobject, LEAD_FIELDS_LOGIC_ROLE.COMPANY)?.text;

    if (!companyLead) {
      pathUrl = bobjectUrl(bobject);
    } else {
      const relatedBobject = getRelatedBobject(bobject, BOBJECT_TYPES.COMPANY);
      pathUrl = relatedBobject && bobjectUrl(bobject, relatedBobject);
    }
  }

  return pathUrl;
};

const Footer = ({ classes, handleCloseModal, showContactButton, bobject, company }) => {
  const { openEditModal } = useBobjectFormVisibility();
  const { history } = useRouter();
  const { checkPermissions } = useBobjectPermissions();
  const bobjectTypeName = bobject.id.typeName;
  const path = getPath(bobject);
  const hasPermission = company ? checkPermissions(company) : checkPermissions(bobject);
  return (
    <div
      className={classNames({ [classes.root]: true, [classes.justifyCenter]: !showContactButton })}
    >
      <div className={classes.editBtn}>
        <Button
          expand
          disabled={!hasPermission}
          variant="secondary"
          dataTest="modalEditButton"
          onClick={() => openEditModal({ bobject })}
        >
          Edit {bobjectTypeName}
        </Button>
      </div>
      {showContactButton && (
        <div className={classes.contactBtn}>
          <Button
            expand
            disabled={!hasPermission}
            dataTest="modalContactButton"
            onClick={() => {
              history.push(path);
              handleCloseModal();
            }}
          >
            Contact{' '}
            {bobjectTypeName === BOBJECT_TYPES.OPPORTUNITY
              ? BOBJECT_TYPES.COMPANY
              : bobjectTypeName}
          </Button>
        </div>
      )}
    </div>
  );
};

export default withWrappers({ style })(Footer);
