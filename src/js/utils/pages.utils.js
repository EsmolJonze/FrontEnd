export const isLeadPage = pathname => {
  const regex = /.+\/(?:leads(?=\/[0-9a-zA-Z]*)|companies(?=\/[0-9a-zA-Z]*\?leadId=[0-9a-zA-Z]*\/Lead\/[0-9a-zA-Z]*))/;
  return regex.test(pathname);
};

export const isLeadWithoutCompanyPage = pathname => {
  const regex = /.+\/leads\/[0-9a-zA-Z]*/;
  return regex.test(pathname);
};

export const isCompanyPage = pathname => {
  const regex = /.+\/companies\/[0-9a-zA-Z]*/;
  return regex.test(pathname);
};

export const isOpportunityPage = pathname => {
  const regex = /.+\/companies\/[0-9a-zA-Z]*\/opportunities\/[0-9a-zA-Z]*/;
  return regex.test(pathname);
};

export const isNotificationPage = pathname => {
  const regex = /.+\/companies\/.*[?&]notificationId=[0-9a-zA-Z]*/;
  return regex.test(pathname);
};

export const isSalesPage = pathname => {
  const regex = /.+\/tasks\/sales*/;
  return regex.test(pathname);
};
