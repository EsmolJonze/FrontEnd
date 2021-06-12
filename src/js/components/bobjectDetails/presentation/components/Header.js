import { bobjectFieldsModel } from '../../../../misc/model/bobjectFieldsModel';
import { Button } from '@material-ui/core';
import { BobjectFieldPill } from '../../../filter/field/pill';
import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { cssVariables } from '../../../../style/variables';
import constantStyles from '../style';
import CopyToClipboard from '../../../CopyToClipboard';
import { withRouter } from 'react-router';
import classNames from 'clsx';
import { companyUrl, leadUrl } from '../../../../app/_constants/routes';
import { LeadsOverview } from './leadsOverview.view';
import BusinessAsset from '../../../BussinesAsset';
import { COMPANY_FIELDS_LOGIC_ROLE } from '../../../../constants/company';
import { BobjectField } from '../../../filter/field/field';
import {
  AttemptsBobjectField,
  LastAttemptBobjectField,
  LastTouchBobjectField,
  TouchesBobjectField,
} from '../../../bobjectFields/bobjectFields';
import { useHover } from '../../../../hooks';
import { BOBJECT_TYPES } from '../../../../constants/bobject';
import { getRelatedBobject } from '../../../../utils/bobjects.utils';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';

const {
  ATTEMPTS_COUNT,
  ATTEMPTS_LAST_DAY,
  COUNTRY,
  LINKEDIN_URL,
  SOURCE,
  TOUCHES_COUNT,
  TOUCHES_LAST_DAY,
  WEBSITE,
} = COMPANY_FIELDS_LOGIC_ROLE;

const logicRoles = [
  WEBSITE,
  LINKEDIN_URL,
  SOURCE,
  COUNTRY,
  ATTEMPTS_COUNT,
  ATTEMPTS_LAST_DAY,
  TOUCHES_COUNT,
  TOUCHES_LAST_DAY,
];

const style = {
  closeButton: {
    gridColumn: 3,
    alignSelf: 'start',
    justifySelf: 'end',
    minWidth: '0px !IMPORTANT',
    padding: '8px !IMPORTANT',
    '&:hover': {
      backgroundColor: 'initial !IMPORTANT',
    },
  },
  svgStyle: {
    fontSize: '32px',
  },
  header: {
    display: 'grid',
    gridTemplateColumns: '25% 50% 25%',
    gridTemplateRows: 'auto 50px 40px auto auto',
    backgroundColor: cssVariables.color.bloobirds.veryLightOcapity,
    justifyContent: 'space-between',
    color: cssVariables.color.grey.natural,
    flexFlow: 'wrap',
    width: constantStyles.header.computedWidth,
    zIndex: 4,
    borderBottom: `1px solid ${cssVariables.color.gunmetal.veryLight}`,
  },
  headerTitle: {
    fontSize: '25px',
    maxWidth: '400px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    gridRow: 2,
    gridColumn: '1 / 4',
    justifySelf: 'center',
    display: 'grid',
    gridTemplateColumns: '60px auto 60px',
  },
  headerLink: {
    color: '#1991ff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    margin: 'auto 8px',
    letterSpacing: '0.8px',
  },
  headerBoxContainer: {
    height: 'fit-content',
    display: 'flex',
  },
  tmCardDetailsHeaderBtn: {
    margin: '-5px 0',
  },
  tmCardDetailsHeaderLink: {
    margin: 'auto 50px',
  },
  fieldsWrapper: {
    gridColumnGap: 20,
    margin: 20,
    gridColumn: '1/4',
    gridRow: 5,
    display: 'grid',
    gridTemplateColumns: '206px 206px',
  },
  statusWrapper: {
    gridColumn: '1/4',
    gridRow: 3,
    justifySelf: 'center',
    display: 'flex',
    '&>*': {
      margin: 'auto 10px auto 0',
    },
    '&:first-child': {
      marginLeft: 0,
    },
  },
  editBtn: {
    '& > *': {
      color: cssVariables.color.bloobirds.natural,
      fill: `${cssVariables.color.bloobirds.natural} !important`,
    },
  },
  linkIcon: {
    fontSize: 16,
    marginLeft: 8,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  linkPanel: {
    display: 'flex',
    visibility: 'hidden',
    flexDirection: 'row',
    gridColumn: 3,
    '&>*': {
      margin: 'auto',
    },
  },
  linkPanelVisible: {
    visibility: 'visible',
  },
  headerTitleText: {
    gridColumn: 2,
    maxWidth: 247,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerTitleIcon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gridRow: 1,
    gridColumn: 2,
    '&>*': {
      margin: '16px auto 0 auto',
    },
  },
  listElement: {
    '& > div': {
      display: 'grid',
      height: 24,
      gridTemplateColumns: '24px auto',
    },
    '& > div > svg': {
      gridColumn: '1 / 2',
      height: '16px',
      '& >  * ': {
        fill: cssVariables.color.gunmetal.light,
      },
    },
    '& > div > :not(svg) ': {
      gridColumn: '2 / 3',
      fontSize: 13,
      color: cssVariables.color.gunmetal.natural,
    },
    '& > div > a': {
      display: 'grid',
      color: cssVariables.color.bloobirds.natural,
    },
  },
};
const pills = {
  COMPANY__WEBSITE: BobjectField,
  COMPANY__LINKEDIN_URL: BobjectField,
  COMPANY__SOURCE: BobjectField,
  COMPANY__COUNTRY: BobjectField,
  COMPANY__ATTEMPTS_COUNT: AttemptsBobjectField,
  COMPANY__ATTEMPTS_LAST_DAY: LastAttemptBobjectField,
  COMPANY__TOUCHES_COUNT: TouchesBobjectField,
  COMPANY__TOUCHES_LAST_DAY: LastTouchBobjectField,
};
const Header = withStyles(style)(({ bobject, classes, handleCloseModal, company }) => {
  const [hoverRef, isHovered] = useHover();
  const model = bobjectFieldsModel(bobject.fields);
  const bobjectType = bobject.id.typeName;
  const isLeadBobject = bobjectType === BOBJECT_TYPES.LEAD;

  const nameLogicRole = isLeadBobject
    ? `${bobjectType.toUpperCase()}__FULL_NAME`
    : `${bobjectType.toUpperCase()}__NAME`;

  const businessAssetEntityClass = isLeadBobject ? 'idealCustomerProfiles' : 'targetMarkets';

  const bussinessAssetLogicRole = isLeadBobject
    ? `${bobjectType.toUpperCase()}__ICP`
    : 'COMPANY__TARGET_MARKET';

  const name = model.findByLogicRole(nameLogicRole).text;
  const companyMrRating = model.findByLogicRole('COMPANY__MR_RATING');
  let link = `${window.location.origin}${companyUrl(bobject)}`;
  let businessAssetEntityId = model.findByLogicRole(bussinessAssetLogicRole)?.value;

  if (bobjectType === BOBJECT_TYPES.LEAD) {
    link = `${window.location.origin}${leadUrl(bobject, company)}`;
  }

  if (bobjectType === BOBJECT_TYPES.OPPORTUNITY) {
    const relatedBobject = getRelatedBobject(bobject, BOBJECT_TYPES.COMPANY);
    const companyModel = bobjectFieldsModel(relatedBobject?.fields);
    link = relatedBobject ? `${window.location.origin}${companyUrl(relatedBobject)}` : null;
    businessAssetEntityId =
      relatedBobject && companyModel?.findByLogicRole('COMPANY__TARGET_MARKET')?.value;
  }
  const status = model.findByLogicRole(`${bobjectType.toUpperCase()}__STATUS`);
  return (
    <div className={classes.header}>
      <span className={classes.headerTitleIcon}>
        <BusinessAsset entityClass={businessAssetEntityClass} entityId={businessAssetEntityId} />
      </span>
      <span className={classes.headerTitle} ref={hoverRef}>
        <span className={classes.headerTitleText} title={name}>
          {name}
        </span>
        <span
          className={classNames({
            [classes.linkPanel]: true,
            [classes.linkPanelVisible]: isHovered,
          })}
        >
          {link && (
            <>
              <CopyToClipboard dataToCopy={link}>
                <div className={classes.linkIcon}>
                  <Icon name="link" />
                </div>
              </CopyToClipboard>
              <div onClick={() => window.open(link)} className={classes.linkIcon}>
                <Icon name="externalLink" />
              </div>
            </>
          )}
        </span>
      </span>

      <span className={classes.statusWrapper}>
        <BobjectFieldPill field={status} />
        {companyMrRating && <BobjectFieldPill field={companyMrRating} />}
      </span>
      {bobjectType === 'Company' && <LeadsOverview companyId={bobject.id.value} />}
      {bobjectType === 'Company' && (
        <span className={classes.fieldsWrapper}>
          {logicRoles.map(logicRole => {
            const Component = pills[logicRole];
            return (
              <span key={`${logicRole}`} className={classes.listElement}>
                <Component field={model.findByLogicRole(logicRole)} />
              </span>
            );
          })}
        </span>
      )}
      <Button className={classes.closeButton} variant="text" onClick={handleCloseModal}>
        <Icon name="cross" size={36} color="softPeanut" />
      </Button>
    </div>
  );
});

export default withRouter(Header);
