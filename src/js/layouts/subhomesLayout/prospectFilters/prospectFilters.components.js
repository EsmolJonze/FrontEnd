import DateFilter from './dateFilter';
import OrderFilter from './orderFilter';
import HideCompletedFilter from './hideCompletedFilter';
import BobjectFieldTagsFilter from './bobjectFieldTagsFilter';
import { filtersNames } from './prospectFilters.constants';
import StatusFilter from './statusFilter';
import OpportunityStatusFilter from './opportunityStatusFilter';

export const filterComponent = Object.freeze({
  dateFilter: DateFilter,
  orderFilter: OrderFilter,
  hideCompletedFilter: HideCompletedFilter,
  sourceFilter: BobjectFieldTagsFilter({
    logicRole: 'COMPANY__SOURCE',
    title: 'Source',
    type: filtersNames.source,
  }),
  statusFilter: StatusFilter,
  opportunityStatusFilter: OpportunityStatusFilter,
});
