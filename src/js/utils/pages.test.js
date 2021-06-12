import { isCompanyPage, isLeadPage, isNotificationPage, isOpportunityPage } from './pages.utils';

test('properly checks that a page is a company page', () => {
  const pathNames = [
    '/app/cl/companies/EO8Xf9ZFnQ1C2T6c',
    '/app/cl/companies/EO8Xf9ZFnQ1C2T6c?queryString=whatever',
  ];
  pathNames.forEach(path => expect(isCompanyPage(path)).toBe(true));
});

test('properly checks that a page is not a company page', () => {
  const pathNames = ['/app/cl/company/EO8Xf9ZFnQ1C2T6c'];
  pathNames.forEach(path => expect(isCompanyPage(path)).toBe(false));
});

test('properly checks that a page is a lead page', () => {
  const pathNames = [
    '/app/cl/leads/EO8Xf9ZFnQ1C2T6c',
    '/app/cl/leads/EO8Xf9ZFnQ1C2T6c?queryString=whatever',
    '/app/cl/companies/0Tl7ztKzlMP1E4j9?leadId=ITLCIOpIV8bs0STg/Lead/k79j9h2GkHX6c3o7',
  ];
  pathNames.forEach(path => expect(isLeadPage(path)).toBe(true));
});

test('properly checks that a page is not a lead page', () => {
  const pathNames = ['/app/cl/companies/EO8Xf9ZFnQ1C2T6c'];
  pathNames.forEach(path => expect(isLeadPage(path)).toBe(false));
});

test('properly checks that a page is a notification page', () => {
  const pathNames = [
    '/app/cl/companies/sLnaweJvSbEUHcmb?showContactFlow=KssBU3Y6eizupGPl&notificationId=5f7468b10a14e74519552801',
    '/app/cl/companies/SeSBUig0tFk7CNIu?notificationId=5f7466180a14e745195527fc',
    '/app/cl/companies/sLnaweJvSbEUHcmb&notificationId=5f7468b10a14e74519552801?showContactFlow=KssBU3Y6eizupGPl',
    '/app/cl/companies/BVtfar1AWIafFwE9?notificationId=5f75c8314f2dce571669f7c6#wsCNGe5mJSEOXIE1',
  ];
  pathNames.forEach(path => expect(isNotificationPage(path)).toBe(true));
});

test('properly checks that a page is not a notification page', () => {
  const pathNames = ['/app/cl/companies/SeSBUig0tFk7CNIu'];
  pathNames.forEach(path => expect(isNotificationPage(path)).toBe(false));
});

test('properly checks that a page is an opportunity page', () => {
  const pathNames = [
    '/app/cl/companies/sLnaweJvSbEUHcmb/opportunities/sLnaweJvSbEUHcmb?showContactFlow=KssBU3Y6eizupGPl&notificationId=5f7468b10a14e74519552801',
    '/app/cl/companies/sLnaweJvSbEUHcmb/opportunities/sLnaweJvSbEUHcmb',
  ];
  pathNames.forEach(path => expect(isOpportunityPage(path)).toBe(true));
});

test('properly checks that a page is not a notification page', () => {
  const pathNames = ['/app/cl/companies/SeSBUig0tFk7CNIu'];
  pathNames.forEach(path => expect(isOpportunityPage(path)).toBe(false));
});
