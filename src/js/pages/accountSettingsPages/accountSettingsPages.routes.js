import React from 'react';
import { Route, withRouter } from 'react-router';
import {
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_TAB,
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_TAB,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL_FORM,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN_FORM,
  // APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_NEW,
  // APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_ONE_CLONE,
  // APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_ONE_EDIT,
  // APP_MANAGEMENT_ACCOUNT_QQ_RATING_SCORE,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH_FORM,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_FORM,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_SCORES,
  APP_MANAGEMENT_ACCOUNT_PREFERENCES_NOTIFICATIONS,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_PLAYBOOK,
} from '../../app/_constants/routes';
import EmailTemplatesPage from './emailTemplatesPage';
import EmailTemplateForm from './emailTemplatesPage/emailTemplateForm';
import LinkedinTemplateForm from './linkedinTemplatesPage/linkedinTemplateForm';
import LinkedinTemplatesPage from './linkedinTemplatesPage/linkedinTemplatesPage.view';
import PitchTemplatesPage from './pitchTemplatesPage';
import PitchTemplateForm from './pitchTemplatesPage/pitchTemplateForm';
import QualifyingQuestionsPage from './qualifyingQuestionTemplatesPage';
import QualifyingQuestionsScore from './qualifyingQuestionTemplatesPage/qualifyingQuestionScoresPage';
import SalesforceIntegrationPage from './salesforceIntegrationPage/salesforceIntegrationPage.view';
import QualifyingQuestionTemplateForm from './qualifyingQuestionTemplatesPage/qualifyingQuestionTemplateForm';
import HubspotIntegrationPage from './huspotIntegrationPage/hubspotIntegrationPage';
import NotificationsPage from './notificationsPage';
import PlaybookSegmentationPage from './playbookSegmentationPage';

const Routes = () => (
  <>
    <Route exact path={APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH} component={PitchTemplatesPage} />
    <Route exact path={APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL} component={EmailTemplatesPage} />
    <Route exact path={APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ} component={QualifyingQuestionsPage} />
    <Route
      exact
      path={APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_SCORES}
      component={QualifyingQuestionsScore}
    />
    <Route
      exact
      path={APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN}
      component={LinkedinTemplatesPage}
    />
    <Route exact path={APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH_FORM} component={PitchTemplateForm} />
    <Route exact path={APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL_FORM} component={EmailTemplateForm} />
    <Route
      exact
      path={APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_FORM}
      component={QualifyingQuestionTemplateForm}
    />
    <Route
      exact
      path={APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN_FORM}
      component={LinkedinTemplateForm}
    />
    <Route
      exact
      path={APP_MANAGEMENT_ACCOUNT_MESSAGING_PLAYBOOK}
      component={PlaybookSegmentationPage}
    />
    <Route
      exact
      path={APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_TAB}
      component={SalesforceIntegrationPage}
    />
    <Route
      exact
      path={APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_TAB}
      component={HubspotIntegrationPage}
    />
    <Route
      exact
      path={APP_MANAGEMENT_ACCOUNT_PREFERENCES_NOTIFICATIONS}
      component={NotificationsPage}
    />
    {/* <Switch> */}
    {/*   <Route */}
    {/*     exact */}
    {/*     path={APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_NEW} */}
    {/*     render={() => <QualifiedQuestions mode="CREATE" />} */}
    {/*   /> */}
    {/*   <Route */}
    {/*     path={APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_ONE_EDIT} */}
    {/*     render={({ match }) => <QualifiedQuestions qqId={match.params.id} mode="EDIT" />} */}
    {/*   /> */}
    {/*   <Route */}
    {/*     path={APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_ONE_CLONE} */}
    {/*     render={({ match }) => <QualifiedQuestions qqId={match.params.id} mode="CLONE" />} */}
    {/*   /> */}
    {/* </Switch> */}
    {/* <Route exact path={APP_MANAGEMENT_ACCOUNT_QQ_RATING_SCORE} component={QQRatingScore} /> */}
  </>
);

export default withRouter(Routes);
