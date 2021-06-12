import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Button, Skeleton, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import NavigationBar from './navegationBar';
import { TaskProvider } from '../../contexts/task/task.provider';
import { isLeadPage } from '../../utils/pages.utils';
import CadenceTable from '../../components/cadenceTable';
import {
  useActiveCompany,
  useActiveLeads,
  useActiveOpportunities,
  useCadenceControl,
  useContactFlow,
  useDialerVisibility,
  usePreviousUrl,
  useQueryParams,
  useRestartCadence,
  useRouter,
  useTargetMarket,
} from '../../hooks';
import { useUserSettings } from '../../components/userPermissions/hooks';
import LeadList from './leadList';
import TaskContainer from './taskContainer';
import ContactTabs from './contactTabs';
import RestartCadenceModal from './restartCadenceModal';
import styles from './contactLayout.module.css';
import ContactFlowModal from '../../components/contactFlowModal';
import { useParams } from 'react-router';
import UndoToast from '../../components/undoToast';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { isWebsocketDataActionForWithId } from '../../reducers/utils';
import { WEBSOCKET_MESSAGE_INCOMING } from '../../actions/dictionary';
import { useActiveActivities, useActiveActivitiesFilters } from '../../hooks/useActiveActivities';
import CadenceControlModal from './cadenceControlModal';
import { BOBJECT_TYPES } from '../../constants/bobject';
import ErrorPage from '../../pages/errorPage';
import { COMPANY_FIELDS_LOGIC_ROLE } from '../../constants/company';
import { OPPORTUNITY_FIELDS_LOGIC_ROLE } from '../../constants/opportunity';
import { getFieldByLogicRole } from '../../utils/bobjects.utils';

const useCompanyChangesMonitor = companyId => {
  const [companyChanged, setCompanyChanged] = useState(0);
  const [createSubscription, setCreateSubscription] = useState(false);

  SubscriptionHooks.useWebsocketEventSubscription(
    'data-Company',
    data => {
      if (
        isWebsocketDataActionForWithId('Company')(companyId)({
          type: WEBSOCKET_MESSAGE_INCOMING,
          data,
        })
      ) {
        setCompanyChanged(x => x + 1);
      }
    },
    { createSubscription },
  );

  useEffect(() => {
    setCreateSubscription(false);
    setTimeout(() => setCreateSubscription(true), 100);
  }, [companyId]);

  return { companyChanged };
};

const ContactLayout = ({
  bobjectType,
  id,
  bobject,
  InfoCard,
  showCadence = true,
  error: pageError = undefined,
}) => {
  const params = useParams();
  const { isLoaded: areLeadsLoaded, resetActiveLeads, resetSelectedLead } = useActiveLeads();
  const {
    company,
    updateActiveCompany,
    isLoaded: isCompanyLoaded,
    resetActiveCompany,
  } = useActiveCompany();
  const { resetSelectedActiveOpportunity } = useActiveOpportunities();
  const { isOpen: isRestartCadenceOpen } = useRestartCadence();
  const queryParams = useQueryParams();
  const { isOpen: isOpenContactFlow, openContactFlow, closeContactFlow } = useContactFlow();
  const {
    isOpen: isOpenCadenceControl,
    openCadenceControl,
    closeCadenceControl,
  } = useCadenceControl();
  const { closeDialer, isOpen: isDialerOpen } = useDialerVisibility();
  const { setPreviousUrl, getPreviousUrl } = usePreviousUrl();
  const url = getPreviousUrl();
  const { history, location } = useRouter();
  const { companyChanged } = useCompanyChangesMonitor(params.id);
  const { resetAllFilters: resetActivityFilters } = useActiveActivitiesFilters();
  const [error, setError] = useState(null);
  const settings = useUserSettings();
  const { resetActivitiesState } = useActiveActivities();
  const companyTargetMarket =
    company && getFieldByLogicRole(company, COMPANY_FIELDS_LOGIC_ROLE.TARGET_MARKET).text;
  const defaultCadence =
    bobjectType === BOBJECT_TYPES.COMPANY
      ? useTargetMarket(companyTargetMarket)?.name
      : settings?.opportunityDefaultCadenceName;

  const getCadenceName = () => {
    const LOGIC_ROLES =
      bobjectType === BOBJECT_TYPES.OPPORTUNITY
        ? OPPORTUNITY_FIELDS_LOGIC_ROLE
        : COMPANY_FIELDS_LOGIC_ROLE;
    const cadenceName = getFieldByLogicRole(bobject, LOGIC_ROLES.CADENCE)?.text;

    return cadenceName || defaultCadence;
  };

  const removeQueryParam = param => {
    if (queryParams.has(param)) {
      queryParams.delete(param);
      const newQueryParams = queryParams.toString();
      const historyState = {
        pathname: window.location.pathname,
        search: newQueryParams ? `?${newQueryParams}` : '',
      };

      history.replace(historyState);
      setPreviousUrl(url);
    }
  };

  useEffect(() => {
    setError(pageError);
  }, [pageError]);

  useLayoutEffect(() => {
    if (bobjectType !== BOBJECT_TYPES.LEAD) {
      updateActiveCompany(params.id, res => {
        setError({ ...res, is400: res.status >= 400 && res.status < 500 });
      });
    }
    return () => {
      resetSelectedActiveOpportunity();
      resetActiveLeads();
      resetSelectedLead();
      resetActivityFilters();
      resetActiveCompany();
      resetActivitiesState();
    };
  }, [params.id]);

  useEffect(() => {
    if (queryParams.has('showContactFlow') && !isOpenContactFlow) {
      openContactFlow();
    }
    if (queryParams.has('showCadenceControl') && !isOpenCadenceControl) {
      openCadenceControl();
    }
  }, [queryParams]);

  useEffect(() => {
    if (companyChanged > 0) {
      updateActiveCompany(params.id, res => {
        setError({ ...res, is400: res.status >= 400 && res.status < 500 });
      });
    }
  }, [companyChanged]);

  const hasCadence = showCadence && !!getCadenceName() && !isLeadPage(location?.pathname);

  const hasInfoCardData =
    (bobjectType === BOBJECT_TYPES.COMPANY && isCompanyLoaded) ||
    bobjectType === BOBJECT_TYPES.LEAD ||
    bobjectType === BOBJECT_TYPES.OPPORTUNITY;

  return !error ? (
    <TaskProvider>
      <div className={styles._container} id={id}>
        <div style={{ display: 'none' }}>
          <span id="userId">{settings?.user.id}</span>
          <span id="bobjectId">{bobject?.id.value}</span>
          <span id="companyId">{company?.id.value}</span>
        </div>
        <NavigationBar />
        <div className={styles._info__container}>
          <div className={styles._info__row}>
            <div className={styles._infoCard__container}>
              <React.Suspense fallback={<Skeleton variant="rect" width={328} height={435} />}>
                {bobject && hasInfoCardData ? (
                  <InfoCard bobject={bobject} />
                ) : (
                  <Skeleton variant="rect" width={328} height={435} />
                )}
              </React.Suspense>
            </div>
            <div className={styles._info__column}>
              <React.Suspense fallback={<Skeleton height={96} width="100%" variant="rect" />}>
                {areLeadsLoaded ? (
                  <TaskContainer bobject={bobject} bobjectType={bobjectType} />
                ) : (
                  <Skeleton height={96} width="100%" variant="rect" />
                )}
              </React.Suspense>
              <div className={styles._leadList__container}>
                <React.Suspense fallback={<Skeleton variant="rect" width="100%" height={323} />}>
                  {areLeadsLoaded ? (
                    <LeadList bobjectType={bobjectType} />
                  ) : (
                    <Skeleton variant="rect" width="100%" height={323} />
                  )}
                </React.Suspense>
              </div>
            </div>
          </div>
        </div>
        {hasCadence && !isLeadPage(location?.pathname) && (
          <div className={styles._cadence__row}>
            <div className={styles._cadence__container}>
              <React.Suspense fallback={<Skeleton width="100%" height={264} variant="rect" />}>
                {areLeadsLoaded ? (
                  <CadenceTable
                    offsetDays={-2}
                    showNavigation
                    showHeader
                    handleClickTitle={step => openCadenceControl({ previousStep: false, step })}
                    bobjectType={bobjectType}
                  />
                ) : (
                  <Skeleton width="100%" height={264} variant="rect" />
                )}
              </React.Suspense>
            </div>
          </div>
        )}
        {!hasCadence && !isLeadPage(location?.pathname) && (
          <div className={styles._without_cadence_wrapper}>
            <div className={styles._message_wrapper}>
              <Text size="m" color="softPeanut">
                No cadence selected, choose one to start prospecting
              </Text>
            </div>
            <Button
              variant="secondary"
              size="small"
              onClick={() => openCadenceControl({ previousStep: false })}
            >
              CONFIGURE CADENCE
            </Button>
          </div>
        )}
        <ContactTabs />
        {isRestartCadenceOpen && <RestartCadenceModal />}
        {isOpenContactFlow && (
          <ContactFlowModal
            open
            handleClose={() => {
              removeQueryParam('showContactFlow');
              closeContactFlow();
              if (isDialerOpen) {
                closeDialer();
              }
            }}
          />
        )}
        {isOpenCadenceControl && (
          <CadenceControlModal
            open
            handleClose={() => {
              removeQueryParam('showCadenceControl');
              closeCadenceControl();
            }}
          />
        )}
      </div>
      <UndoToast />
    </TaskProvider>
  ) : (
    <ErrorPage
      action={{
        name: error.is400 ? 'Back to lists' : 'Refresh',
        handleClick: error.is400 ? history.goBack : window.location.reload,
        icon: error.is400 ? 'arrowLeft' : 'refresh',
      }}
      showSupport={!error.is400}
    >
      <Text color="softPeanut" align="center" size="m">
        <Text color="softPeanut" inline weight="bold" size="m">
          {error.status}
        </Text>
        {" That's an error."}
      </Text>
      <Text color="softPeanut" align="center" size="m" htmlTag="span">
        {error.is400
          ? `This ${bobjectType} does not exist.`
          : 'We are experiencing problems. Try refreshing the page. If this problem persists, please contact support.'}
      </Text>
    </ErrorPage>
  );
};

export default ContactLayout;
