import React, { useLayoutEffect } from 'react';
import styles from './navegationBar.module.css';
import {
  Dropdown,
  IconButton,
  Tab,
  Text,
  useVisible,
} from '@bloobirds-it/bloobirds-platform-component-library';
import {
  useActiveCompany,
  usePreviousUrl,
  useRouter,
  useActiveOpportunities,
  useActiveLeads,
} from '../../../hooks';
import { getValueFromLogicRole } from '../../../utils/bobjects.utils';
import { useUserSettings } from '../../../components/userPermissions/hooks';
import { APP_CL_COMPANIES, APP_CL_LEADS, companyIdUrl } from '../../../app/_constants/routes';
import { isLeadPage, isOpportunityPage } from '../../../utils/pages.utils';
import OpportunitiesDropdown from '../opportunitiesDropdown';
import { useTaskNavigation } from '../../../hooks/useTaskNavigation';
import classNames from 'clsx';
import TaskNavigator from './taskNavigator/taskNavigator.view';

const NavigationBar = () => {
  const { history, pathname } = useRouter();
  const { previousUrl } = usePreviousUrl();
  const { company } = useActiveCompany();
  const { selectedLead } = useActiveLeads();
  const { opportunities } = useActiveOpportunities();
  const { ref, visible, setVisible } = useVisible();
  const settings = useUserSettings();
  const { shouldShowNavigation, finishNavigation, isTaskCompleted } = useTaskNavigation();

  const handleBackButton = () => {
    const url = new URL(window.location.href);
    if (shouldShowNavigation) {
      finishNavigation();
    }
    if (previousUrl !== '' && previousUrl !== APP_CL_COMPANIES) {
      history.goBack();
    } else if (isLeadPage(url.href)) {
      history.push(APP_CL_LEADS);
    } else {
      history.push(APP_CL_COMPANIES);
    }
  };

  const handleCompanyLink = () => {
    if (company) {
      const companyUrl = companyIdUrl(company.id.objectId);
      history.push(companyUrl);
    }
  };

  const topHalfClasses = classNames(styles._topHalf__container, {
    [styles._topHalf__gradient]: shouldShowNavigation,
    [styles._topHalf__completed_gradient]: shouldShowNavigation && isTaskCompleted(),
  });

  useLayoutEffect(
    () => () => {
      finishNavigation();
    },
    [],
  );

  return (
    <div className={styles._container}>
      <div className={topHalfClasses}>
        <div className={styles._bobjectName__container}>
          <IconButton
            color={shouldShowNavigation ? 'white' : 'peanut'}
            name="arrowLeft"
            onClick={handleBackButton}
            size={16}
            dataTest="goBackButton"
          />
          <Text color={shouldShowNavigation ? 'white' : 'peanut'} size="l">
            {getValueFromLogicRole(company, 'COMPANY__NAME') ||
              `Lead: ${getValueFromLogicRole(selectedLead, 'LEAD__FULL_NAME')}`}
          </Text>
        </div>
        {shouldShowNavigation && <TaskNavigator />}
      </div>
      <div className={styles._bottomHalf__container}>
        <Tab name="Company" active={!isOpportunityPage(pathname)} onClick={handleCompanyLink} />
        {settings?.account?.features.salesFeature && (
          <Dropdown
            ref={ref}
            visible={visible}
            anchor={
              <Tab
                name={`Opportunities ${
                  opportunities?.length > 0 ? `(${opportunities.length})` : ''
                }`}
                onClick={() => {
                  if (opportunities?.length > 0) {
                    setVisible(!visible);
                  }
                }}
                dataTest="Dropdown-opportunityDropdown"
                iconRight="chevronDown"
                disabled={!opportunities || opportunities?.length === 0}
                active={isOpportunityPage(pathname)}
              />
            }
            arrow={false}
            position="bottom-start"
          >
            <OpportunitiesDropdown toggleVisibility={() => setVisible(!visible)} />
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
