import React, { useEffect, useMemo, useState } from 'react';
import {
  TableCell,
  IconButton,
  Item,
  TableRow,
  Select,
  Text,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './userTabRow.module.css';
import { useHover, useMediaQuery } from '../../../../hooks';

const UserTabRow = ({ crmUser, bloobirdsUsers, onClickLink, handleOnSelectChange, usersMap }) => {
  const [ref, isHover] = useHover();
  const [user, setUser] = useState(crmUser[usersMap.userId]);
  const { isSmallDesktop } = useMediaQuery();
  const mappedBloobirdsUsers = useMemo(
    () =>
      bloobirdsUsers?.map(bloobirdsUser => (
        <Item key={bloobirdsUser.id} value={bloobirdsUser.id}>
          {bloobirdsUser.name}
        </Item>
      )),
    [bloobirdsUsers],
  );

  useEffect(() => setUser(crmUser[usersMap.userId]), [crmUser]);

  return (
    <TableRow ref={ref}>
      <TableCell>
        <div className={styles._icon_button}>
          <Text size="s" color="bloobirds">
            {usersMap.userSurname
              ? `${crmUser[usersMap.userName]} ${crmUser[usersMap.userSurname]}`
              : `${crmUser[usersMap.userName]}`}
          </Text>
          {isHover && <IconButton name="externalLink" onClick={() => onClickLink(crmUser)} />}
        </div>
      </TableCell>
      <TableCell>
        {isSmallDesktop ? (
          <Tooltip title={crmUser[usersMap.userMail]} position="top">
            <Text size="s" color="peanut" ellipsis={20}>
              {crmUser[usersMap.userMail]}
            </Text>
          </Tooltip>
        ) : (
          <Text size="s" color="peanut">
            {crmUser[usersMap.userMail]}
          </Text>
        )}
      </TableCell>
      <TableCell>
        {crmUser[usersMap.userCRMId] && isSmallDesktop ? (
          <Tooltip title={crmUser[usersMap.userCRMId]} position="top">
            <Text size="s" color="peanut" ellipsis={13}>
              {crmUser[usersMap.userCRMId]}
            </Text>
          </Tooltip>
        ) : (
          <Text size="s" color="peanut">
            {crmUser[usersMap.userCRMId]}
          </Text>
        )}
      </TableCell>
      <TableCell>
        <Select
          placeholder="Select Bloobirds user"
          value={user}
          onChange={event => {
            handleOnSelectChange(event, crmUser);
            setUser(event);
          }}
        >
          {mappedBloobirdsUsers}
        </Select>
      </TableCell>
    </TableRow>
  );
};
export default UserTabRow;
