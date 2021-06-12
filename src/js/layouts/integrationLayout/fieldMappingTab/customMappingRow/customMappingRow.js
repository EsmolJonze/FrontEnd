import React, { useState, useMemo } from 'react';
import {
  Button,
  IconButton,
  TableRow,
  TableCell,
  Text,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useHover, useMediaQuery } from '../../../../hooks';
import styles from './customMappingRow.module.css';
import PropTypes from 'prop-types';
import { formatDate } from '../../../../utils/dates.utils';

const CustomMappingRow = ({
  customMap,
  bobjectFields,
  bobjectTypes,
  deleteMapping,
  handleOpen,
  mappingName,
  setMap,
  sobjectMap,
}) => {
  const [ref, isHover] = useHover();
  const [isDelete, setIsDelete] = useState(false);
  const { isSmallDesktop } = useMediaQuery();
  const handleDelete = map => {
    deleteMapping(map);
    setIsDelete(false);
  };
  const bobjectType = useMemo(
    () =>
      bobjectTypes &&
      Object.entries(bobjectTypes)?.filter(
        type => type[1] === bobjectFields[customMap.bobjectField].bobjectType,
      )[0][0],
    [bobjectTypes],
  );

  return (
    <TableRow ref={ref} onClick={() => isDelete && setIsDelete(false)}>
      <TableCell>
        <div className={styles._first_cell}>
          <div>
            {customMap.fieldName.length > 15 ? (
              <Tooltip title={customMap.fieldName} position="top" trigger="hover">
                <div>
                  <Text size="s" color="bloobirds" ellipsis={15}>
                    {customMap.fieldName}
                  </Text>
                  <Text size="xs" color="softPeanut">
                    {bobjectType}
                  </Text>
                </div>
              </Tooltip>
            ) : (
              <>
                <Text size="s" color="bloobirds">
                  {customMap.fieldName}
                </Text>
                <Text size="xs" color="softPeanut">
                  {bobjectType}
                </Text>
              </>
            )}
          </div>
          <div className={styles._buttons}>
            {isHover && (
              <>
                {isSmallDesktop ? (
                  <div>
                    <IconButton
                      name="edit"
                      onClick={() => {
                        handleOpen(true);
                        setMap(customMap);
                      }}
                    />
                    {isDelete && (
                      <IconButton
                        name="trashFull"
                        color="softTomato"
                        onClick={() => handleDelete(customMap)}
                        uppercase
                      />
                    )}
                    {!isDelete && (
                      <IconButton name="trashFull" onClick={() => setIsDelete(true)} uppercase />
                    )}
                  </div>
                ) : (
                  <>
                    <IconButton
                      name="edit"
                      onClick={() => {
                        handleOpen(true);
                        setMap(customMap);
                      }}
                    />
                    {isDelete && (
                      <Button
                        variant="secondary"
                        size="small"
                        color="softTomato"
                        onClick={() => handleDelete(customMap)}
                        uppercase
                      >
                        really?
                      </Button>
                    )}
                    {!isDelete && (
                      <Button
                        variant="secondary"
                        size="small"
                        onClick={() => setIsDelete(true)}
                        uppercase
                      >
                        delete
                      </Button>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div>
          <Text size="s" color="peanut">
            {customMap.keyName}
          </Text>
          <Text size="xs" color="softPeanut">
            {sobjectMap[mappingName.name]}
          </Text>
        </div>
      </TableCell>
      <TableCell>
        <div className={styles._align_row_text}>
          <Text size="s" color="peanut">
            Prefer Bloobirds
          </Text>
        </div>
      </TableCell>
      <TableCell>
        <div className={styles._align_row_text}>
          <Text size="s" color="peanut">
            Custom
          </Text>
        </div>
      </TableCell>
      <TableCell>
        <div className={styles._align_row_text}>
          <Text size="s" color="peanut">
            {formatDate(new Date(customMap.updateDatetime), 'MMM d, yyyy')}
          </Text>
        </div>
      </TableCell>
      <TableCell>
        <div className={styles._align_row_text}>
          <Text size="s" color="peanut">
            {formatDate(new Date(customMap.creationDatetime), 'MMM d, yyyy')}
          </Text>
        </div>
      </TableCell>
    </TableRow>
  );
};
CustomMappingRow.propTypes = {
  bobjectFields: PropTypes.object,
  bobjectTypes: PropTypes.object,
  customMap: PropTypes.object,
  deleteMapping: PropTypes.func,
  handleOpen: PropTypes.func,
  setMap: PropTypes.func,
};
export default CustomMappingRow;
