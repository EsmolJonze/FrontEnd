import React, { useMemo } from 'react';
import {
  Table,
  Head,
  Cell,
  Body,
  Row,
  Select,
  Item,
  Text,
  Icon,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './mappingHubpotCallResults.css';

const MappingHubspotCallResultsView = ({
  activityTrigger,
  handleSaveConfig,
  hubspotCallResults,
  callResults,
  descending,
  handleSorting,
}) => {
  const callResultsMapping = activityTrigger.jsonConfig.hubspotCallResultsMapping;
  const icon = descending ? 'arrowDown' : 'arrowUp';

  const row = useMemo(
    () =>
      callResultsMapping &&
      hubspotCallResults &&
      Object.entries(callResults)?.map(callResult => (
        <Row>
          <div className={styles._cell_text}>
            <Cell>
              <Text size="s">{callResult[0]}</Text>
            </Cell>
          </div>
          <div className={styles._cell}>
            <Cell>
              <Select
                placeholder="Select call result"
                onChange={value => handleSaveConfig(value, callResult[1].logicRole)}
                defaultValue={callResultsMapping[callResult[1].logicRole]}
              >
                {hubspotCallResults?.map(hubspotCallResult => (
                  <Item value={hubspotCallResult}>{hubspotCallResult.label}</Item>
                ))}
              </Select>
            </Cell>
          </div>
        </Row>
      )),
    [callResults, hubspotCallResults],
  );

  return (
    <div>
      <Table>
        <Head>
          <Cell>
            <div
              style={{ display: 'flex', cursor: 'pointer' }}
              onClick={() => handleSorting(!descending)}
            >
              <Text size="xs" uppercase>
                Bloobirds Call Result
              </Text>
              <Icon name={icon} size="16" color="peanut" />
            </div>
          </Cell>
          <Cell>
            <Text size="xs" uppercase>
              HubSpot Call Result
            </Text>
          </Cell>
        </Head>
        <Body>{row}</Body>
      </Table>
    </div>
  );
};
export default MappingHubspotCallResultsView;
