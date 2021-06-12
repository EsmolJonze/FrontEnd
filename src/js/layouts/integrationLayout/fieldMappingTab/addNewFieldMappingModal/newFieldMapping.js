import React, { useEffect, useMemo, useState } from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalSection,
  Input,
  Callout,
  Select,
  Item,
  Section,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './newFieldMapping.module.css';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useActiveUser } from '../../../../hooks';

const NewFieldMapping = ({
  bobjectFields,
  customMappings,
  bobjectTypes,
  customMap,
  open,
  handleOpen,
  handleRefreshMappings,
  crm,
}) => {
  const [salesforceField, setSalesforceField] = useState(customMap && customMap.keyName);
  const [existMapping, setExistMapping] = useState(false);
  const [selectValue, setSelectValue] = useState(customMap && customMap.bobjectField);
  const disabled = !selectValue || !salesforceField;
  const handleClose = () => {
    setSalesforceField('');
    setSelectValue('');
    handleOpen(false);
  };
  const modalSectionTitle = `Map Bloobirds field to ${crm} field`;
  const crmPlaceHolder = `${crm} field`;
  const { restApi } = useBloobirdsApiStateContext();
  const { activeAccount } = useActiveUser();
  const title = customMap ? 'Edit field mapping' : 'Create field mapping';
  const createItems = (field, sectionName) => {
    const bobjectField = field[1];
    const bobjectFieldId = field[0];
    return (
      <Item
        key={bobjectFieldId}
        label={bobjectField.name}
        value={bobjectFieldId}
        section={sectionName}
      >
        {bobjectField.name}
      </Item>
    );
  };

  useEffect(() => {
    setSalesforceField(customMap && customMap.keyName);
    setSelectValue(customMap && customMap.bobjectField);
  }, [customMap]);

  const leadFields = useMemo(
    () =>
      Object.entries(bobjectFields)
        ?.filter(bobjectField => bobjectField[1].bobjectType === bobjectTypes.Lead)
        .sort((a, b) => (a[1].name > b[1].name ? 1 : -1))
        .map(bobjectField => createItems(bobjectField, 'lead-fields')),
    [bobjectFields],
  );
  const companyFields = useMemo(
    () =>
      Object.entries(bobjectFields)
        ?.filter(bobjectField => bobjectField[1].bobjectType === bobjectTypes.Company)
        .sort((a, b) => (a[1].name > b[1].name ? 1 : -1))
        .map(bobjectField => createItems(bobjectField, 'company-fields')),
    [bobjectFields],
  );
  const activityFields = useMemo(
    () =>
      Object.entries(bobjectFields)
        ?.filter(bobjectField => bobjectField[1].bobjectType === bobjectTypes.Activity)
        .sort((a, b) => (a[1].name > b[1].name ? 1 : -1))
        .map(bobjectField => createItems(bobjectField, 'activity-fields')),
    [bobjectFields],
  );

  const handleOnSubmit = () => {
    if (customMap) {
      restApi
        .service('triggerMappingCustomFieldMaps')
        .partialUpdate(customMap.id, {
          account: `/accounts/${activeAccount.id}`,
          triggerMapping: `/triggerMappingCustomFieldMaps/${customMap.triggerMapping}`,
          bobjectField: `/bobjectFields/${selectValue}`,
          keyName: salesforceField,
        })
        .then(() => {
          handleRefreshMappings(true);
        });
    } else {
      restApi
        .service('triggerMappingCustomFieldMaps')
        .create({
          account: `/accounts/${activeAccount.id}`,
          triggerMapping: `/triggerMappingCustomFieldMaps/${customMappings[0].triggerMapping}`,
          bobjectField: `/bobjectFields/${selectValue}`,
          keyName: salesforceField,
        })
        .then(() => {
          handleRefreshMappings(true);
        });
    }
    handleClose();
  };
  const handleSalesforceField = value => {
    setExistMapping(
      customMappings.filter(customMapping => customMapping.keyName === value).length > 0,
    );
    setSalesforceField(value);
  };
  const handleSelectChange = bloobirdsField => {
    setSelectValue(bloobirdsField);

    const salesforceName = customMappings.filter(
      customMapping => customMapping.fieldName === bobjectFields[bloobirdsField].name,
    );
    if (salesforceName.length > 0) {
      setSalesforceField(salesforceName[0].keyName);
    } else {
      setSalesforceField('');
    }
  };

  return (
    <>
      <Modal title={title} open={open} onClose={handleClose}>
        <ModalContent>
          <ModalSection title={modalSectionTitle} icon="settings">
            <div className={styles._modal_section}>
              {bobjectFields && (
                <Select
                  placeholder="Bloobirds field"
                  autocomplete
                  value={selectValue || ''}
                  onChange={value => {
                    handleSelectChange(value);
                  }}
                  width="100%"
                >
                  <Section id="activity-fields">
                    <div className={styles._section}>Activity fields</div>
                  </Section>
                  {activityFields}

                  <Section id="company-fields">
                    <div className={styles._section}>Company fields</div>
                  </Section>
                  {companyFields}

                  <Section id="lead-fields">
                    <div className={styles._section}>Lead fields</div>
                  </Section>
                  {leadFields}
                </Select>
              )}
              <div className={styles._modal_section_text}>
                <svg className={styles._modal_section_svg}>
                  <g>
                    <path d="M5 10 l250 0" />
                  </g>
                </svg>
              </div>
              <Input
                value={salesforceField}
                placeholder={crmPlaceHolder}
                onChange={handleSalesforceField}
              />
            </div>
            {existMapping && (
              <div className={styles._callout}>
                <Callout variant="alert">Salesforce field is already mapped</Callout>
              </div>
            )}
          </ModalSection>
        </ModalContent>
        <ModalFooter>
          <Button variant="clear" color="bloobirds" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleOnSubmit} disabled={disabled || existMapping}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default NewFieldMapping;
