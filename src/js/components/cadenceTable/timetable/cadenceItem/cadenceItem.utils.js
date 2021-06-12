import { bobjectModel } from '../../../../misc/model/bobjectFieldsModel';
import isSameDay from 'date-fns/isSameDay';
import isSameWeek from 'date-fns/isSameWeek';
import isSameMonth from 'date-fns/isSameMonth';

export const findActivitiesInStatusForDayData = (filter, dayData, activities) => {
  if (filter === 'day') {
    return activities.filter(activity => {
      const model = bobjectModel(activity);
      const activityTime = new Date(model.findByLogicRole('ACTIVITY__TIME').value);
      return isSameDay(dayData.date, activityTime);
    });
  }

  if (filter === 'week') {
    return activities.filter(activity => {
      const model = bobjectModel(activity);
      const activityTime = new Date(model.findByLogicRole('ACTIVITY__TIME').value);
      return isSameWeek(dayData.drillStart, activityTime, { weekStartsOn: 1 });
    });
  }

  if (filter === 'month') {
    return activities.filter(activity => {
      const model = bobjectModel(activity);
      const activityTime = new Date(model.findByLogicRole('ACTIVITY__TIME').value);
      const monthDate = new Date(dayData.display);
      return isSameMonth(monthDate, activityTime, { weekStartsOn: 1 });
    });
  }

  return [];
};
