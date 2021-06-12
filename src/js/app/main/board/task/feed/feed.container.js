import React from 'react';
import Feed from './feed.view';
import { connect } from 'react-redux';
import { useEntity } from '../../../../../hooks';
import styles from './feed.module.css';

const FeedWrapper = props => {
  const bobjectFields = useEntity('bobjectFields');
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');

  if (!bobjectFields || !bobjectPicklistFieldValues) {
    return <div className={styles._filter_sidebar_container} />;
  }

  return (
    <Feed
      {...props}
      bobjectFields={bobjectFields}
      bobjectPicklistFieldValues={bobjectPicklistFieldValues}
    />
  );
};

const mapStateToProps = state => {
  const {
    taskWorkspace: {
      taskFeed: { taskCount, displaySidebar, selectedTaskCategory, cameFromDonePage },
    },
  } = state;

  return {
    taskCount,
    displaySidebar,
    selectedTaskCategory,
    cameFromDonePage,
  };
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedWrapper);
