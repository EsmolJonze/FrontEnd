import React, { useEffect, useMemo, useState } from 'react';
import FieldMapping from './fieldMappingTab.view';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useActiveUser } from '../../../hooks';
import { useEntity } from '../../../hooks/entities/useEntity';

const FieldMappingContainer = ({ mappings, initMapping, crm, link, sobjectMap }) => {
  const [mappingName, setMappingName] = useState(initMapping);
  const [fieldMappings, setFieldMappings] = useState(undefined);
  const [customMappings, setCustomMappings] = useState(undefined);
  const [systemMappings, setSystemMappings] = useState(undefined);
  const [refreshCustomMappings, setRefreshCustomMappings] = useState(true);
  const [refreshAccountTriggers, setRefreshAccountTriggers] = useState(true);
  const [renderFieldMapping, setRenderFieldMapping] = useState(false);
  const [accountTriggers, setAccountTriggers] = useState(undefined);
  const [searchValue, setSearchValue] = useState('');
  const { activeAccount } = useActiveUser();
  const { restApi } = useBloobirdsApiStateContext();
  const [totalElements, setTotalElements] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleOnChangePage = newPage => {
    setRefreshCustomMappings(true);
    setPage(newPage);
  };
  const handleOnChangePowsPerPage = row => {
    setRefreshCustomMappings(true);
    setRowsPerPage(row);
  };

  const triggerMappings = useEntity('triggerMappings')?.all();
  const reducedTriggerMappings = useMemo(
    () =>
      triggerMappings?.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.name]: curr.id,
        }),
        {},
      ),
    [triggerMappings],
  );
  useEffect(() => {
    restApi
      .service('triggerMappingSystemVarNames')
      .search({
        query: {
          accountId: activeAccount.id,
        },
        size: 1000,
      })
      .then(response => {
        setSystemMappings(response?._embedded.triggerMappingSystemVarNames);
      });
  }, [crm]);

  const bobjectFields = useEntity('bobjectFields')?.all();
  const reducedBobjectFields = useMemo(
    () =>
      bobjectFields?.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.id]: { name: curr.name, bobjectType: curr.bobjectType },
        }),
        {},
      ),
    [bobjectFields],
  );
  const standardTriggers = useEntity('standardTriggers')?.all();
  const reducedStandardTriggers = useMemo(
    () =>
      standardTriggers?.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.name]: curr.id,
        }),
        {},
      ),
    [standardTriggers],
  );
  useEffect(() => {
    if (refreshCustomMappings && reducedTriggerMappings) {
      restApi
        .service('triggerMappingCustomFieldMaps')
        .search({
          page,
          size: rowsPerPage,
          query: {
            accountId: activeAccount.id,
            triggerMapping: reducedTriggerMappings[mappingName.name],
          },
        })
        .then(response => {
          setRefreshCustomMappings(false);
          setCustomMappings(response?._embedded.triggerMappingCustomFieldMaps);
          setTotalElements(response?.page.totalElements);
        });
    }
  }, [refreshCustomMappings, reducedTriggerMappings, page, rowsPerPage, searchValue]);

  useEffect(() => {
    if (refreshAccountTriggers) {
      restApi
        .service('accountBobjectTriggers')
        .search({ query: { accountId: activeAccount.id } })
        .then(response => {
          setAccountTriggers(response?._embedded.accountBobjectTriggers);
          setRefreshAccountTriggers(false);
        });
    }
  }, [refreshAccountTriggers]);

  const reducedAccountTriggers = useMemo(
    () =>
      accountTriggers?.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.standardTrigger]: {
            active: curr.active,
            id: curr.id,
            jsonConfig: JSON.parse(curr.jsonConfig),
          },
        }),
        {},
      ),
    [accountTriggers],
  );
  const handleChangeActive = value => {
    restApi
      .service('accountBobjectTriggers')
      .partialUpdate(
        reducedAccountTriggers[reducedStandardTriggers[mappingName.accountTrigger]].id,
        {
          active: value,
        },
      )
      .then(() => {
        setRefreshAccountTriggers(true);
      });
  };

  const filteredSystemMappings = useMemo(
    () =>
      reducedTriggerMappings &&
      systemMappings?.filter(
        systemMapping => systemMapping.triggerMapping === reducedTriggerMappings[mappingName.name],
      ),
    [systemMappings, reducedTriggerMappings],
  );

  const filteredCustomMappings = useMemo(
    () =>
      reducedBobjectFields &&
      customMappings
        ?.map(customMapping => ({
          ...customMapping,
          fieldName: reducedBobjectFields[customMapping.bobjectField]?.name,
        }))
        .filter(customMapping => {
          if (searchValue !== '') {
            return customMapping.fieldName?.toLowerCase().includes(searchValue.toLowerCase());
          }
          return true;
        }),
    [customMappings, reducedBobjectFields],
  );
  const onDeleteMapping = customMap => {
    restApi
      .service('triggerMappingCustomFieldMaps')
      .delete(customMap.id)
      .then(() => {
        setRefreshCustomMappings(true);
      });
  };
  useEffect(() => {
    if (
      standardTriggers &&
      accountTriggers &&
      triggerMappings &&
      bobjectFields &&
      systemMappings &&
      customMappings &&
      fieldMappings
    ) {
      setRenderFieldMapping(true);
    }
  }, [
    standardTriggers,
    accountTriggers,
    triggerMappings,
    bobjectFields,
    systemMappings,
    customMappings,
    fieldMappings,
  ]);

  useEffect(() => {
    if (reducedAccountTriggers && reducedStandardTriggers) {
      if (crm === 'Salesforce') {
        const jsonConfig =
          reducedAccountTriggers[reducedStandardTriggers.LEAD__SALESFORCE].jsonConfig;

        if (jsonConfig.alwaysCreateLead) {
          delete mappings[2];
        }
        if (jsonConfig.alwaysCreateContact) {
          delete mappings[1];
        }
        setFieldMappings(mappings);
      } else {
        setFieldMappings(mappings);
      }
    }
  }, [reducedAccountTriggers, reducedStandardTriggers]);
  return (
    <>
      {renderFieldMapping && (
        <FieldMapping
          customMappings={filteredCustomMappings}
          systemMappings={filteredSystemMappings}
          mappingName={mappingName}
          setMappingName={setMappingName}
          bobjectFields={reducedBobjectFields}
          triggerMappings={reducedTriggerMappings}
          deleteMapping={onDeleteMapping}
          searchValue={searchValue}
          handleChangeSearchValue={setSearchValue}
          handleRefreshCustomMappings={setRefreshCustomMappings}
          onChangePage={handleOnChangePage}
          handleOnChangeRowsPerPage={handleOnChangePowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          count={totalElements}
          accountTriggers={
            reducedAccountTriggers[reducedStandardTriggers[mappingName.accountTrigger]]
          }
          handleChangeActive={handleChangeActive}
          crm={crm}
          mappings={fieldMappings}
          link={link}
          sobjectMap={sobjectMap}
        />
      )}
    </>
  );
};
export default FieldMappingContainer;
