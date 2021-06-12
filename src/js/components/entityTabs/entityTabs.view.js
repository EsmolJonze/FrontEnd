import React, { useEffect, useState, useRef } from 'react';
import { withStyles } from '@material-ui/core';
import { IconButton, Button, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { cssVariables } from '../../style/variables';
import {
  ENTITY_TABS_HIDE,
  ENTITY_TABS_REQUEST_SUCCESS,
  ENTITY_TABS_RESET,
  ENTITY_TABS_SHOW,
  ENTITY_TABS_SWITCH_TAB,
} from '../../actions/dictionary';
import classNames from 'clsx';
import { ServiceApi } from '../../misc/api/service';
import styles from './entityTabs.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';
import { v4 as generateRandomId } from 'uuid';
import { useBobjectFormCreation } from '../../hooks';

const style = {
  tmContainer: {
    fontFamily: cssVariables.typography.ProximaNovaSoft,
  },
  tm: {
    color: '#000',
    opacity: '0.7',
    display: 'flex',
    width: '80%',
  },
  textCurrentIcon: {
    fontFamily: cssVariables.typography.ProximaNovaSoft,
    margin: 'auto',
  },
  textIcon: {
    fontSize: 17,
    fontFamily: cssVariables.typography.ProximaNovaSoft,
    width: 'fit-content',
    margin: 'auto',
    height: 20,
  },
  tmCurrentIcon: {
    color: cssVariables.color.white.natural,
    margin: '9px',
    display: 'flex',
    width: '48px',
    height: '45px',
    borderRadius: '50px',
    overflow: 'hidden',
    border: `2px solid ${cssVariables.color.white.natural}`,
  },
  tmIcon: {
    color: cssVariables.color.white.natural,
    padding: 0,
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    margin: '10px 30px 0 0',
    cursor: 'pointer',
    border: 'none',
    fontSize: '14px',
    outline: 'none',
  },
  tmSelectedIcon: {
    color: cssVariables.color.white.natural,
    borderRadius: '50px',
    cursor: 'pointer',
    padding: 0,
    border: 'none',
    width: '42px',
    height: '42px',
    margin: '6px 26px 0 0',
    fontSize: '14px',
    outline: 'none',
    overflow: 'hidden',
  },
  tmTitleLinkContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  tmDetailBtn: {
    width: '270px',
    height: 'auto',
    '&:hover': {
      width: '270px',
      height: 'auto',
    },
  },
  tmDetailsHeaderLink: {
    fontSize: '14px',
    color: cssVariables.color.bloobirds.natural,
    textDecoration: 'none',
    margin: '0 8px',
  },
  tmDetailsArticle: {
    padding: '24px 23px 1px',
    backgroundColor: cssVariables.color.white.natural,
  },
  tmDetailsArticleFieldValues: {
    backgroundColor: cssVariables.color.white.natural,
    display: 'flex',
    flexFlow: 'wrap',
    padding: '0 23px 0 23px',
  },
  tmDetailsCompanyInfoText: {
    fontSize: '15px',
    color: cssVariables.color.gunmetal.light,
    margin: '0 0 8px 0',
  },
  tmDetailsCompanyInfoDescription: {
    fontSize: '17px',
    color: cssVariables.color.gunmetal.natural,
    margin: '0',
    marginBottom: '24px',
  },
  tmDetailsFieldContainer: {
    margin: '0 40px 0 0',
  },
  tmDetailsFieldWrap: {
    display: 'flex',
    flexFlow: 'wrap',
    marginBottom: '16px',
  },
  tmDetailsFieldValuesValue: {
    fontSize: '15px',
    textTransform: 'uppercase',
    color: cssVariables.color.gunmetal.natural,
    margin: '0 10px 10px 0',
    border: '1px solid #c2c3c4',
    borderRadius: '20px',
    padding: '2px 10px',
  },
  tmDetailsFooterContainer: {
    border: '1px solid #d6d7d8',
    borderRadius: '4px',
    padding: '26px 30%',
    textAlign: 'center',
    backgroundColor: cssVariables.color.bloobirds.superVeryLight,
  },
  tmDisplayQualifiedCompanies: {
    padding: '26px',
    backgroundColor: cssVariables.color.bloobirds.veryLight,
  },
  textQualifiedCompanies: {
    display: 'flex',
    color: cssVariables.color.gunmetal.light,
    margin: '10px 44px 10px',
  },
  labelQualifiedCompanies: {
    margin: '0 180px 0 10px',
    fontWeight: 'bold',
  },
  tmDetailsFooterText: {
    color: cssVariables.color.bloobirds.natural,
    fontSize: '20px',
    lineHeight: '1.2',
    marginBottom: '24px',
  },
  loaderWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  textTitle: {
    marginBottom: 0,
    fontSize: '13px',
    color: cssVariables.color.gunmetal.light,
  },
  tmCardDetail: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textParagraph: {
    margin: 0,
  },
  chevronUpIcon: {
    margin: 'auto',
  },
  cardLinkedinContainer: {
    margin: 'auto 10px auto 50px;',
    display: 'flex',
  },
  tmCardDetailsHeaderLink: {
    margin: 'auto 50px',
  },
  externalIcon: {
    fontSize: '12px',
  },
  displayCompanyInfo: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  backwardsButton: {
    margin: '15px 30px 10px 30px',
  },
  forwardButton: {
    margin: '15px 30px 10px 10px',
  },
};

const FieldValues = ({ entity, classes }) =>
  entity.fieldValues.map(fv => (
    <div className={classes.tmDetailsFieldContainer}>
      <p className={classes.tmDetailsCompanyInfoText}>{fv.title}</p>
      <div className={classes.tmDetailsFieldWrap}>
        {fv.values.map(value => (
          <p className={classes.tmDetailsFieldValuesValue}>{value}</p>
        ))}
      </div>
    </div>
  ));

const getFontSize = (textLength, baseFontSize = 20) => {
  const baseSize = 2;
  const fontSize = baseFontSize - (textLength - baseSize) * 4;
  return `${fontSize}px`;
};

const CurrentEntity = ({
  entities,
  displayed,
  classes,
  expanded,
  handleDisplayCompanyInfo,
  handleHideCompanyInfo,
  informationTitleLabel,
}) =>
  entities.map((entity, key) => {
    if (key === displayed) {
      const fontSize = getFontSize(entity.shortName.length, 25);
      return (
        <div key={`ctm-${entity.name}`} className={styles._targetMarkets__entity__container}>
          <section>
            <div className={styles._targetMarkets__entity__header}>
              <div
                style={{ backgroundColor: entity.color }}
                className={styles.targetMarkets__entity__button}
              >
                <div
                  className={styles.targetMarkets__button__text}
                  style={{
                    fontSize,
                    height: fontSize,
                    lineHeight: fontSize,
                  }}
                >
                  {entity.shortName}
                </div>
              </div>
              <div className={classes.tmTitleLinkContainer}>
                <Text color="peanut" inline={false}>
                  {entity.name}
                </Text>
                <div className={classes.cardLinkedinContainer}>
                  <IconButton
                    name={!expanded ? 'chevronDown' : 'chevronUp'}
                    onClick={!expanded ? handleDisplayCompanyInfo : handleHideCompanyInfo}
                  />
                </div>
              </div>
            </div>
            {expanded ? (
              <React.Fragment>
                <article className={classes.tmDetailsArticle}>
                  <p className={classes.tmDetailsCompanyInfoText}>{informationTitleLabel}</p>
                  <p className={classes.tmDetailsCompanyInfoDescription}>
                    {entity.description.replace(/<\/?(.*?)>/g, '')}
                  </p>
                </article>
                <article className={classes.tmDetailsArticleFieldValues}>
                  {key === displayed && entity.fieldValues.length !== 0 && (
                    <FieldValues entity={entity} classes={classes} />
                  )}
                </article>
              </React.Fragment>
            ) : (
              ''
            )}
          </section>
        </div>
      );
    }
    return undefined;
  });

const NamesList = ({ entities, displayed, displayTargetMarket }) => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [pagedEntities, setPagedEntities] = useState(entities.slice(0, 10));

  const { windowDimensions } = useMediaQuery();

  const ref = useRef(null);

  const handleNextEntities = () => {
    setPage(page + 1);
  };
  const handlePreviousEntities = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    const numberOfTMs = ref.current ? Math.floor(ref.current.offsetWidth / 52) : 0;
    setSize(numberOfTMs);
  }, [windowDimensions.width]);

  useEffect(() => {
    setPagedEntities(entities.slice((page - 1) * size, size * page));
  }, [page, size]);

  return (
    <div className={styles._targetMarkets__container}>
      <IconButton
        name="chevronLeft"
        onClick={handlePreviousEntities}
        disabled={page === 1}
        size={16}
      />
      <div className={styles._targetMarketsList__container} ref={ref}>
        {pagedEntities.map((entity, key) => {
          const { shortName } = entity;
          const targetMarketIndex = key + (page - 1) * size;
          const fontSize = getFontSize(shortName.length);
          return (
            <div
              id={targetMarketIndex}
              key={generateRandomId()}
              className={classNames(styles.targetMarkets__button, {
                [styles.targetMarkets__button_selected]: displayed === targetMarketIndex,
              })}
              onClick={displayTargetMarket(targetMarketIndex)}
              style={{ backgroundColor: entity.color }}
            >
              <div
                className={styles.targetMarkets__button__text}
                style={{
                  fontSize,
                  height: fontSize,
                  lineHeight: fontSize,
                }}
              >
                {entity.shortName}
              </div>
            </div>
          );
        })}
        {[...Array(size - pagedEntities.length > 0 ? size - pagedEntities.length : 0).keys()].map(
          () => (
            <div className={styles.targetMarkets__placeholder} key={generateRandomId()} />
          ),
        )}
      </div>
      <IconButton
        name="chevronRight"
        onClick={handleNextEntities}
        size={16}
        disabled={entities.length <= size * page}
      />
    </div>
  );
};

const EntityTabsView = withStyles(style)(props => {
  const {
    entityType,
    classes,
    entities,
    displayTargetMarket,
    displayed,
    dispatch,
    handleOpenModal,
    expanded,
    handleDisplayCompanyInfo,
    handleHideCompanyInfo,
    onCtaClick,
    title,
    subtitle,
    modalButtonText,
    informationTitleLabel,
    reset,
  } = { ...props };

  useEffect(() => reset, []);

  React.useEffect(() => {
    ServiceApi.request({
      url: `/service/view/${entityType}`,
      method: 'GET',
    }).then(payload => dispatch({ type: ENTITY_TABS_REQUEST_SUCCESS, payload }));
  }, [entityType, dispatch]);

  if (entities !== undefined) {
    return (
      <div className={classes.tmContainer}>
        <div className={styles._targetMarkets__title}>
          <Text color="softPeanut" size="xs">
            {title}
          </Text>
          <Text color="peanut">{subtitle}</Text>
        </div>
        <div className={styles.targetMarketsRow__container}>
          <NamesList
            entities={entities}
            displayTargetMarket={displayTargetMarket}
            displayed={displayed}
            classes={classes}
          />
          {modalButtonText && (
            <div className={styles.createQC__container}>
              <Button expand onClick={() => handleOpenModal(onCtaClick)}>
                {modalButtonText}
              </Button>
            </div>
          )}
        </div>
        <CurrentEntity
          displayed={displayed}
          entities={entities}
          classes={classes}
          expanded={expanded}
          handleDisplayCompanyInfo={handleDisplayCompanyInfo}
          handleHideCompanyInfo={handleHideCompanyInfo}
          informationTitleLabel={informationTitleLabel}
        />
      </div>
    );
  }
  return (
    <div className={classes.loaderWrapper}>
      <CircularProgress />
    </div>
  );
});
const mapStateToProps = state => ({
  displayed: state.components.entityTabs.displayed,
  expanded: state.components.entityTabs.expanded,
  entities: state.components.entityTabs.entities,
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch({ type: ENTITY_TABS_RESET }),
  displayTargetMarket: key => () => dispatch({ type: ENTITY_TABS_SWITCH_TAB, value: key }),
  handleOpenModal: onClick => onClick(dispatch),
  handleDisplayCompanyInfo: () => dispatch({ type: ENTITY_TABS_SHOW }),
  handleHideCompanyInfo: () => dispatch({ type: ENTITY_TABS_HIDE }),
  dispatch,
});

const EntityTabs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EntityTabsView);

export const TargetMarketTabs = props => {
  const { openAddCompany } = useBobjectFormCreation();
  return (
    <EntityTabs
      {...props}
      entityType="targetMarket"
      onCtaClick={openAddCompany}
      title="TARGET MARKET"
      subtitle=""
      modalButtonText="ADD NEW QUALIFIED COMPANY"
      informationTitleLabel="COMPANY INFORMATION"
    />
  );
};

export const IdealCustomerProfileTabs = props => {
  const { addLead } = useBobjectFormCreation();
  return (
    <EntityTabs
      {...props}
      entityType="idealCustomerProfile"
      onCtaClick={addLead}
      title="IDEAL CUSTOMERS PROFILES"
      subtitle="Use ideals customers profiles to find the right person"
      informationTitleLabel="ICP INFORMATION"
    />
  );
};
