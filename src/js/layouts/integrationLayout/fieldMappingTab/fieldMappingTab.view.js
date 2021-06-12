import React, { useEffect, useState, useMemo } from 'react';
import {
  Select,
  Item,
  Table,
  Head,
  Cell,
  Text,
  Icon,
  Body,
  Row,
  Button,
  Tooltip,
  Switch,
  Pagination,
  Divider,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './fieldMappingTab.module.css';
import NewFieldMapping from './addNewFieldMappingModal/newFieldMapping';
import CustomMappingRow from './customMappingRow/customMappingRow.js';
import SearchBar from '../../../components/searchBar';
import { SearchLogs } from '../../../../assets/svg';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/dates.utils';
import { useMediaQuery } from '../../../hooks';
import { useEntity } from '../../../hooks/entities/useEntity';
import SystemVarTable from './systemVarTable/systemVarTable';
import MappingHubspotCallResultsContainer from '../../../pages/accountSettingsPages/huspotIntegrationPage/mappingHubspotCallResults/mappingHubspotCallResults.container';

const ROWS_PER_PAGE_OPTIONS = [10, 25, 50];
const NoResults = () => (
  <div className={styles._no_results_content}>
    <SearchLogs className={styles._no_results_content_img} />
    <Text size="xl" weight="bold" align="center" color="softPeanut">
      No field mappings found
    </Text>
    <Text size="m" align="center" weight="regular" color="softPeanut">
      Your search result doesn't match any Custom field mappings
    </Text>
  </div>
);

function SystemMappingRow(props) {
  return (
    <Row>
      <Cell>
        <Text size="s" color="peanut">
          {props.systemMapping.name}
        </Text>
      </Cell>
      <Cell>
        <Text size="s" color="peanut">
          {props.systemMapping.replaceWith}
        </Text>
      </Cell>
      <Cell>
        <Text size="s" color="peanut">
          Prefer Bloobirds
        </Text>
      </Cell>
      <Cell>
        <Text size="s" color="peanut">
          System
        </Text>
      </Cell>
      <Cell>
        <Text size="s" color="peanut">
          {formatDate(new Date(props.systemMapping.creationDatetime), 'MMM d, yyyy')}
        </Text>
      </Cell>
      <Cell>
        <Text size="s" color="peanut">
          {formatDate(new Date(props.systemMapping.updateDatetime), 'MMM d, yyyy')}
        </Text>
      </Cell>
    </Row>
  );
}

SystemMappingRow.propTypes = { systemMapping: PropTypes.any };

const FieldMapping = ({
  customMappings,
  setMappingName,
  systemMappings,
  mappingName,
  bobjectFields,
  triggerMappings,
  deleteMapping,
  handleChangeSearchValue,
  searchValue,
  handleRefreshCustomMappings,
  accountTriggers,
  handleChangeActive,
  onChangePage,
  handleOnChangeRowsPerPage,
  page,
  rowsPerPage,
  count,
  mappings,
  crm,
  link,
  sobjectMap,
}) => {
  const { isSmallDesktop } = useMediaQuery();
  const bobjectTypes = useEntity('bobjectTypes')?.all();
  const reducedBobjectTypes = useMemo(
    () =>
      bobjectTypes?.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.name]: curr.id,
        }),
        {},
      ),
    [bobjectTypes],
  );
  const [open, setOpen] = useState(false);
  const [map, setMap] = useState(undefined);
  const [descendingCustomMaps, isDescendingCustomMaps] = useState({
    value: true,
    column: 'fieldName',
  });
  const initialStateIconCustomMappings = {
    fieldName: 'arrowDown',
    keyName: 'arrowDown',
    creationDatetime: 'arrowDown',
    updateDatetime: 'arrowDown',
  };
  const initialStateIconSystemMappings = {
    name: 'arrowUp',
    replaceWith: 'arrowUp',
    creationDatetime: 'arrowUp',
    updateDatetime: 'arrowUp',
  };
  const [descendingSystemVars, isDescendingSystemVars] = useState({
    value: true,
    column: 'name',
  });
  const [iconName, setIconName] = useState(initialStateIconCustomMappings);
  const [iconNameSystemVars, setIconNameSystemVars] = useState(initialStateIconSystemMappings);
  const filteredCustomMappings = useMemo(
    () =>
      customMappings?.filter(
        customMapping => customMapping.triggerMapping === triggerMappings[mappingName.name],
      ),
    [customMappings],
  );
  const sortedCustomMappings = useMemo(
    () =>
      customMappings
        ?.filter(
          customMapping => customMapping.triggerMapping === triggerMappings[mappingName.name],
        )
        .sort((a, b) => {
          if (descendingCustomMaps.value) {
            return a[descendingCustomMaps.column] > b[descendingCustomMaps.column] ? 1 : -1;
          }
          return a[descendingCustomMaps.column] < b[descendingCustomMaps.column] ? 1 : -1;
        })
        .map(customMap => (
          <CustomMappingRow
            customMap={customMap}
            handleOpen={setOpen}
            deleteMapping={deleteMapping}
            bobjectFields={bobjectFields}
            bobjectTypes={reducedBobjectTypes}
            mappingName={mappingName}
            setMap={setMap}
            sobjectMap={sobjectMap}
          />
        )),
    [customMappings, triggerMappings, descendingCustomMaps],
  );
  const mappedItems = useMemo(
    () => mappings?.map(mapping => <Item value={mapping}>{mapping.title}</Item>),
    [mappings],
  );
  const sortedSystemMappings = useMemo(
    () =>
      systemMappings
        ?.sort((a, b) => {
          if (descendingSystemVars.value) {
            return a[descendingSystemVars.column] > b[descendingSystemVars.column] ? 1 : -1;
          }
          return a[descendingSystemVars.column] < b[descendingSystemVars.column] ? 1 : -1;
        })
        .map(systemMapping => <SystemMappingRow systemMapping={systemMapping} />),
    [descendingSystemVars, systemMappings],
  );
  useEffect(() => {
    setIconName(
      descendingCustomMaps.value
        ? { ...initialStateIconCustomMappings, [descendingCustomMaps.column]: 'arrowDown' }
        : { ...initialStateIconCustomMappings, [descendingCustomMaps.column]: 'arrowUp' },
    );
  }, [descendingCustomMaps]);
  useEffect(() => {
    setIconNameSystemVars(
      descendingSystemVars.value
        ? { ...initialStateIconSystemMappings, [descendingSystemVars.column]: 'arrowDown' }
        : { ...initialStateIconSystemMappings, [descendingSystemVars.column]: 'arrowUp' },
    );
  }, [descendingSystemVars]);

  const canRenderCustomMappingsRow =
    customMappings && bobjectFields && bobjectTypes && customMappings.length > 0;

  return (
    <div>
      <div className={styles._header}>
        <div className={styles._header_left}>
          <Select
            value={mappingName}
            onChange={value => {
              setMappingName(value);
              handleRefreshCustomMappings(true);
              handleChangeSearchValue('');
            }}
          >
            {mappedItems}
            {crm === 'Hubspot' && <Divider />}
            {crm === 'Hubspot' && (
              <Item
                value={{
                  name: 'CALL__RESULTS',
                  bobjectType: '',
                  accountTrigger: '',
                  text: '',
                  title: 'Call results mappings',
                }}
              >
                Call results mappings
              </Item>
            )}
          </Select>
          {accountTriggers && (
            <div className={styles._header_switch}>
              {mappingName.name === 'MEETING__HUBSPOT' ? (
                <>
                  <Icon name="infoFilled" size="24" color="darkBloobirds" />
                  <Text size="s" color="darkBloobirds">
                    These are only used for creation and not to update existing deals
                  </Text>{' '}
                </>
              ) : (
                <>
                  <Switch
                    checked={accountTriggers.active}
                    onChange={value => handleChangeActive(value)}
                  />
                  <Text color="peanut" size="xs" weight="medium" inline>
                    {mappingName.text}
                  </Text>
                </>
              )}
            </div>
          )}
        </div>
        {accountTriggers && (
          <div className={styles._header_search_bar}>
            <div className={styles._search_bar}>
              <SearchBar
                handleChange={value => {
                  handleRefreshCustomMappings(true);
                  handleChangeSearchValue(value);
                }}
                value={searchValue}
                placeholder="Search mapping..."
              />
            </div>
            {isSmallDesktop ? (
              <Button
                onClick={() => {
                  setOpen(true);
                  setMap(undefined);
                }}
                size="medium"
                uppercase
              >
                <Icon name="plus" color="white" size="18" />
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setOpen(true);
                  setMap(undefined);
                }}
                iconLeft="plus"
                size="medium"
                uppercase
              >
                add new field mapping
              </Button>
            )}
          </div>
        )}
      </div>
      {mappingName.name !== 'CALL__RESULTS' && (
        <div className={styles._text}>
          <Text size="xs" color="softPeanut">
            Field mappings are the link between Bloobirds fields and {crm} fields and make
            synchronisation possible.
          </Text>
          <a href={link}>
            <Text size="xs" color="bloobirds" inline>
              {' '}
              Read how to configure them.
            </Text>
          </a>
        </div>
      )}
      <div className={styles._table}>
        {accountTriggers && (
          <Table>
            <Head>
              <Cell>
                {customMappings && (
                  <div
                    className={styles._table_ordering}
                    onClick={() => {
                      isDescendingCustomMaps({
                        value: !descendingCustomMaps.value,
                        column: 'fieldName',
                      });
                    }}
                  >
                    <Text size="xs" color="peanut" uppercase>
                      bloobirds field
                    </Text>
                    {descendingCustomMaps.column === 'fieldName' && (
                      <Icon name={iconName.fieldName} size="16" color="peanut" />
                    )}
                  </div>
                )}
              </Cell>
              <Cell>
                <div
                  className={styles._table_ordering}
                  onClick={() => {
                    isDescendingCustomMaps({
                      value: !descendingCustomMaps.value,
                      column: 'keyName',
                    });
                  }}
                >
                  <Text size="xs" color="peanut" uppercase ellipsis={isSmallDesktop && 10}>
                    {crm} field
                  </Text>
                  {descendingCustomMaps.column === 'keyName' && (
                    <Icon name={iconName.keyName} size="16" color="peanut" />
                  )}
                </div>
              </Cell>
              <Cell>
                <div className={styles._tooltip}>
                  <Text size="xs" color="peanut" uppercase>
                    sync rule
                  </Text>
                  <Tooltip
                    title={`The sync rule determines the system of record. Right now it is only possible to send data from Bloobirds to ${crm}.`}
                    position="top"
                  >
                    <Icon name="infoFilled" color="darkBloobirds" size="16" />
                  </Tooltip>
                </div>
              </Cell>
              <Cell>
                <Text size="xs" color="peanut" uppercase>
                  mapping type
                </Text>
              </Cell>
              <Cell>
                <div
                  className={styles._table_ordering}
                  onClick={() => {
                    isDescendingCustomMaps({
                      value: !descendingCustomMaps.value,
                      column: 'updateDatetime',
                    });
                  }}
                >
                  <Text size="xs" color="peanut" uppercase>
                    last modified
                  </Text>
                  {descendingCustomMaps.column === 'updateDatetime' && (
                    <Icon name={iconName.updateDatetime} size="16" color="peanut" />
                  )}
                </div>
              </Cell>
              <Cell>
                <div
                  className={styles._table_ordering}
                  onClick={() => {
                    isDescendingCustomMaps({
                      value: !descendingCustomMaps.value,
                      column: 'creationDatetime',
                    });
                  }}
                >
                  <Text size="xs" color="peanut" uppercase>
                    create date
                  </Text>
                  {descendingCustomMaps.column === 'creationDatetime' && (
                    <Icon name={iconName.creationDatetime} size="16" color="peanut" />
                  )}
                </div>
              </Cell>
            </Head>
            <Body>
              {canRenderCustomMappingsRow && sortedCustomMappings}
              {customMappings && customMappings.length === 0 && <NoResults />}
            </Body>
          </Table>
        )}
        {accountTriggers && (
          <div className={styles._pagination}>
            <Pagination
              count={count}
              page={page}
              rowsPerPage={rowsPerPage}
              onChangePage={onChangePage}
              onChangeRowsPerPage={handleOnChangeRowsPerPage}
              rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
            />
          </div>
        )}
        {!accountTriggers && mappingName.name === 'CALL__RESULTS' && (
          <MappingHubspotCallResultsContainer />
        )}
      </div>
      {accountTriggers && (
        <>
          <Text size="l" color="peanut">
            System{' '}
            {mappingName.name === 'CONTACT__SALESFORCE' ? 'Contact' : mappingName.bobjectType}{' '}
            mappings
          </Text>
          <div className={styles._text}>
            <Text size="xs" color="softPeanut">
              These are field mappings that are preconfigured and you cannot customise.
            </Text>
          </div>
          <SystemVarTable
            crm={crm}
            onClick={() =>
              isDescendingSystemVars({
                value: !descendingSystemVars.value,
                column: 'name',
              })
            }
            smallDesktop={isSmallDesktop}
            descendingSystemVars={descendingSystemVars}
            iconNameSystemVars={iconNameSystemVars}
            onClick1={() =>
              isDescendingSystemVars({
                value: !descendingSystemVars.value,
                column: 'replaceWith',
              })
            }
            onClick2={() =>
              isDescendingSystemVars({
                value: !descendingSystemVars.value,
                column: 'updateDatetime',
              })
            }
            onClick3={() =>
              isDescendingSystemVars({
                value: !descendingSystemVars.value,
                column: 'creationDatetime',
              })
            }
            systemMappings={systemMappings}
            sortedSystemMappings={sortedSystemMappings}
          />
        </>
      )}
      {customMappings && bobjectFields && triggerMappings && bobjectTypes && accountTriggers && (
        <NewFieldMapping
          bobjectFields={bobjectFields}
          customMappings={filteredCustomMappings}
          bobjectTypes={reducedBobjectTypes}
          open={open}
          handleOpen={setOpen}
          customMap={map}
          handleRefreshMappings={handleRefreshCustomMappings}
          crm={crm}
        />
      )}
    </div>
  );
};

FieldMapping.propTypes = {
  accountTriggers: PropTypes.object,
  bobjectFields: PropTypes.object,
  customMappings: PropTypes.object,
  deleteMapping: PropTypes.func,
  handleChangeActive: PropTypes.func,
  handleChangeSearchValue: PropTypes.func,
  handleRefreshCustomMappings: PropTypes.func,
  mappingName: PropTypes.object,
  searchValue: PropTypes.string,
  setMappingName: PropTypes.func,
  systemMappings: PropTypes.func,
  triggerMappings: PropTypes.object,
};
export default FieldMapping;
