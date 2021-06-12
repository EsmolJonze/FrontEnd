import styles from '../fieldMappingTab.module.css';
import {
  Body,
  Cell,
  Head,
  Icon,
  Table,
  Text,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import PropTypes from 'prop-types';
import React from 'react';

const SystemVarTable = props => (
  <div className={styles._system_var_table}>
    <Table>
      <Head>
        <Cell>
          <div className={styles._table_ordering} onClick={props.onClick}>
            <Tooltip title="BLOOBIRDS LOGIC ROLE" position="top">
              <Text size="xs" color="peanut" uppercase ellipsis={props.smallDesktop && 10}>
                bloobirds logic role
              </Text>
            </Tooltip>
            {props.descendingSystemVars.column === 'name' && (
              <Icon name={props.iconNameSystemVars.name} size="16" color="peanut" />
            )}
            <Tooltip
              title={`A logic role represents a variable that we need in order to send data to ${
                props.crm
              } for a specific object (e.g. Lead).
                This is not always a direct mapping between a Bloobirds and a ${
                  props.crm
                } field but in some cases the combination of multiple pieces of data.`}
              position="top"
            >
              <Icon name="infoFilled" color="darkBloobirds" size="16" />
            </Tooltip>
          </div>
        </Cell>
        <Cell>
          <div className={styles._table_ordering} onClick={props.onClick1}>
            <Text size="xs" color="peanut" uppercase ellipsis={props.smallDesktop && 10}>
              {props.crm} field
            </Text>
            {props.descendingSystemVars.column === 'replaceWith' && (
              <Icon name={props.iconNameSystemVars.replaceWith} size="16" color="peanut" />
            )}
          </div>
        </Cell>
        <Cell>
          <div className={styles._tooltip}>
            <Text size="xs" color="peanut" uppercase>
              SYNC RULE
            </Text>
            <Tooltip
              title={`The sync rule determines the system of record. Right now it is only possible to send data from Bloobirds to ${
                props.crm
              }.`}
              position="top"
            >
              <Icon name="infoFilled" color="darkBloobirds" size="16" />
            </Tooltip>
          </div>
        </Cell>
        <Cell>
          <Text size="xs" color="peanut" uppercase>
            MAPPING TYPE
          </Text>
        </Cell>
        <Cell>
          <div className={styles._table_ordering} onClick={props.onClick2}>
            <Text size="xs" color="peanut" uppercase>
              last modified
            </Text>
            {props.descendingSystemVars.column === 'updateDatetime' && (
              <Icon name={props.iconNameSystemVars.updateDatetime} size="16" color="peanut" />
            )}
          </div>
        </Cell>
        <Cell>
          <div className={styles._table_ordering} onClick={props.onClick3}>
            <Text size="xs" color="peanut" uppercase>
              create date
            </Text>
            {props.descendingSystemVars.column === 'creationDatetime' && (
              <Icon name={props.iconNameSystemVars.creationDatetime} size="16" color="peanut" />
            )}
          </div>
        </Cell>
      </Head>
      <Body>{props.systemMappings && props.sortedSystemMappings}</Body>
    </Table>
  </div>
);

export default SystemVarTable;

SystemVarTable.propTypes = {
  descendingSystemVars: PropTypes.shape({ column: PropTypes.string, value: PropTypes.bool }),
  iconNameSystemVars: PropTypes.shape({
    creationDatetime: PropTypes.string,
    name: PropTypes.string,
    replaceWith: PropTypes.string,
    updateDatetime: PropTypes.string,
  }),
  onClick: PropTypes.func,
  onClick1: PropTypes.func,
  onClick2: PropTypes.func,
  onClick3: PropTypes.func,
  smallDesktop: PropTypes.bool,
  sortedSystemMappings: PropTypes.any,
  systemMappings: PropTypes.any,
};
