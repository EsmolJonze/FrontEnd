import React from 'react';
import { useIsFullSalesEnabled } from '../../../../hooks/useIsFullSalesEnabled';
import { useMessagingFilterOptions } from '../../../../hooks';
import {
  MessagingTemplateSidebar,
  MessagingTemplateSidebarSection,
} from '../../../../components/messagingTemplates/messagingTemplateSidebar/messagingTemplateSidebar';
import { Controller, useFormContext } from 'react-hook-form';
import {
  CheckItem,
  Item,
  MultiSelect,
  Select,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { ControlledSwitch } from '../../../../components/controlledSwitch/controlledSwitch.view';

const SegmentationMultiSelect = ({ value, label, options, ...props }) => (
  <div style={{ marginTop: 16 }}>
    <MultiSelect
      {...props}
      width="100%"
      sortByChecked={false}
      placeholder={value?.length > 0 ? label : `All ${label}`}
      label={label}
      value={value}
    >
      <Item value="">All {label}</Item>
      {options.map(option => (
        <CheckItem key={option.id} value={option.id} label={option.name}>
          {option.name}
        </CheckItem>
      ))}
    </MultiSelect>
  </div>
);

const MessagingSidebarSettings = ({ templateType }) => {
  const { control, watch } = useFormContext();
  const isFullSalesEnabled = useIsFullSalesEnabled();

  const stage = watch('stage');
  const messagingFilters = useMessagingFilterOptions(stage);

  return (
    <MessagingTemplateSidebar>
      <MessagingTemplateSidebarSection
        hidden={!isFullSalesEnabled}
        title="Stage"
        description="Stage enables to easily use your templates on the company or opportunity view depending on the sales stage you are working"
      >
        <Controller
          name="stage"
          control={control}
          as={
            <Select>
              <Item value="PROSPECT">Prospect stage</Item>
              <Item value="SALES">Sales stage</Item>
            </Select>
          }
        />
      </MessagingTemplateSidebarSection>
      <MessagingTemplateSidebarSection title="Options">
        {templateType === 'QUALIFYING_QUESTION' ? (
          <ControlledSwitch control={control} name="isRequiredBeforeMeeting">
            Required to close the meeting?
          </ControlledSwitch>
        ) : (
          <ControlledSwitch control={control} name="visibility">
            Visible for all team members?
          </ControlledSwitch>
        )}
      </MessagingTemplateSidebarSection>
      <MessagingTemplateSidebarSection
        title="Categorization"
        description="Categorizing enables you to easily filter your templates when contacting a lead."
      >
        {messagingFilters.map(filter => (
          <Controller
            control={control}
            key={filter.id}
            name={`segmentationValues.${filter.id}`}
            as={<SegmentationMultiSelect options={filter.values} label={filter.label} />}
          />
        ))}
      </MessagingTemplateSidebarSection>
    </MessagingTemplateSidebar>
  );
};

export default MessagingSidebarSettings;
