import React, { useEffect, useState, Fragment } from 'react';
import { Icon, Item, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import SimpleSelect from '../../../../../../components/simpleSelect';
import styles from './bannerPlaybook.module.css';
import {
  useActiveMessagingSegmentationValuesFilter,
  useActiveMessagingStageFilter,
} from '../../../../../../hooks/useActiveMessagingFilters';
import {
  useActiveCompany,
  useActiveLeads,
  useActiveOpportunities,
  useMessagingFilterOptions,
} from '../../../../../../hooks';
import { getFieldById } from '../../../../../../utils/bobjects.utils';

const BaseBanner = ({ children }) => (
  <div className={styles._banner_wrapper}>
    <div className={styles._title_wrapper}>
      <Text size="xl" color="bloobirds">
        Playbook
      </Text>
      <Icon name="book" size="20" />
    </div>
    <div className={styles._content_wrapper}>
      <Text size="s">This is your recommended messaging based on </Text>
      {children}
    </div>
  </div>
);

const BannerPlaybook = () => {
  const { company } = useActiveCompany();
  const { selectedLead: lead } = useActiveLeads();
  const { selectedOpportunity: opportunity } = useActiveOpportunities();
  const stage = opportunity ? 'SALES' : 'PROSPECT';
  const messagingFilters = useMessagingFilterOptions(stage);
  const [alreadySelected, setAlreadySelected] = useState(false);

  const {
    segmentationValues,
    setOneSegmentationValue,
    setAllSegmentationValues,
  } = useActiveMessagingSegmentationValuesFilter();

  const [, setStageFilter] = useActiveMessagingStageFilter();

  useEffect(() => {
    const newFiltersValue = {};
    if (!alreadySelected) {
      messagingFilters.forEach(filter => {
        const companyField = getFieldById(company, filter.id)?.value;
        const opportunityField = getFieldById(opportunity, filter.id)?.value;
        const leadField = getFieldById(lead, filter.id)?.value;
        const value = opportunityField || companyField || leadField;
        if (value) {
          newFiltersValue[filter.id] = [value];
        }
      });

      // Prevent qualifying question from updating the filters
      if (Object.keys(newFiltersValue).length !== 0) {
        setAlreadySelected(true);
      }

      setAllSegmentationValues(newFiltersValue);
    }
  }, [company, lead, opportunity, messagingFilters.length]);

  useEffect(() => {
    setStageFilter(stage);
  }, [stage]);

  return (
    <BaseBanner>
      {messagingFilters.map((filter, index) => {
        const isPenultimateCriteria = index === messagingFilters.length - 2;
        const isLastCriteria = index === messagingFilters.length - 1;
        const isOnlyOneFilter = messagingFilters.length === 1;

        return (
          <Fragment key={filter.id}>
            <div className={styles._criteria_wrapper}>
              <Text size="s" weight="bold">
                {filter.label}
              </Text>
              <SimpleSelect
                value={segmentationValues[filter.id] ? segmentationValues[filter.id][0] : 'all'}
                onChange={value => {
                  if (value === 'all') {
                    setOneSegmentationValue(filter.id, null);
                  } else {
                    setOneSegmentationValue(filter.id, value);
                  }
                }}
              >
                <Item value="all">All</Item>
                {filter.values.map(option => (
                  <Item key={option.id} value={option?.id}>
                    {option?.name}
                  </Item>
                ))}
              </SimpleSelect>
              {!isOnlyOneFilter && isPenultimateCriteria && (
                <Text className={styles._and_wrapper} size="s">
                  and
                </Text>
              )}
              {!isOnlyOneFilter && !isPenultimateCriteria && !isLastCriteria && (
                <Text size="s">,</Text>
              )}
              {isLastCriteria && <Text size="s">.</Text>}
            </div>
          </Fragment>
        );
      })}
    </BaseBanner>
  );
};

export default BannerPlaybook;
