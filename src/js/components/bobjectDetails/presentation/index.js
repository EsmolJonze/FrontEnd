import withStyles from '@material-ui/styles/withStyles';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { cssVariables } from '../../../style/variables';
import constantStyles from './style';
import Footer from './components/Footer';
import { useBobjectDetails } from '../../../hooks';

const style = {
  mainContainer: {
    backgroundColor: cssVariables.color.white.natural,
    fontFamily: cssVariables.typography.ProximaNovaSoft,
    width: constantStyles.root.computedWidth,
    position: 'absolute',
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    outline: 'none !IMPORTANT',
    boxShadow: '-4px 0px 12px rgba(54, 93, 128, 0.2);',
  },
};

const BobjectDetails = withStyles(style)(({ classes, company }) => {
  const { bobject, closeBobjectDetails, config, setBobjectDetails } = useBobjectDetails();
  return (
    <>
      <div className={classes.mainContainer}>
        <Header bobject={bobject} company={company} handleCloseModal={closeBobjectDetails} />
        <Body
          bobject={bobject}
          handleShowMore={() => setBobjectDetails({ showMoreExpanded: true })}
          handleShowLess={() => setBobjectDetails({ showMoreExpanded: false })}
          showMoreIsExpanded={config?.showMoreExpanded}
        />
        <Footer
          bobject={bobject}
          showContactButton={config?.showContactButton}
          handleCloseModal={closeBobjectDetails}
          company={company}
        />
      </div>
    </>
  );
});

export default BobjectDetails;
