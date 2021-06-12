import React, { useState } from 'react';
import {
  Button,
  Clipboard,
  Label,
  Modal,
  ModalContent,
  ModalFooter,
  TableCell,
  TableRow,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import CodeBlock from './codeBlock/codeBlock';
import styles from './codeBlockModal.module.css';
import theme from './codeBlock/theme.js';
import PropTypes from 'prop-types';
import { getUTCDate, formatDateAsText } from '../../../../utils/dates.utils';

const checkStatus = status => {
  let color = '';

  switch (status) {
    case 'INIT':
      color = 'softBanana';
      break;
    case 'SUCCESS':
      color = 'grape';
      break;
    default:
      color = 'softTangerine';
  }
  return (
    <Label
      color={color}
      overrideStyle={{
        boxSizing: 'border-box',
        padding: '4px 16px',
        width: '96px',
        height: '24px',
        textAlign: 'center',
      }}
      uppercase
    >
      {status}
    </Label>
  );
};
const CodeBlockModal = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const generateDescription = objectType => {
    if (data.action === 'CREATE') {
      if (objectType === 'Activity') {
        return 'New activity in Bloobirds';
      }
      return `${objectType} created in Bloobirds`;
    }
    if (data.action === 'UPDATE') {
      return `${objectType} updated in Bloobirds`;
    }
    if (data.action === 'UPDATEMANY') {
      return 'Many leads updated in Bloobirds';
    }
    if (data.action === 'CREATEMANY') {
      return 'Many activities updated in Bloobirds';
    }
    if (data.action === 'DELETE') {
      return `${objectType} deleted in Bloobirds`;
    }
    if (data.action === 'SEARCH' || data.action === 'GET') {
      return 'Search';
    }
    return 'Untitled action';
  };
  const triggerDescription = () => {
    const trigger = data.triggerName;

    if (trigger.match(/LEAD/i)) {
      return generateDescription('Lead');
    }
    if (trigger.match(/COMPANY/i)) {
      return generateDescription('Company');
    }
    if (trigger.match(/QC/i)) {
      return generateDescription('Company');
    }
    if (trigger.match(/ACTIVITY/i)) {
      return generateDescription('Activity');
    }
    if (trigger.match(/MEETING/i)) {
      return generateDescription('Meeting');
    }
    return '';
  };

  if (typeof data.date !== 'string') {
    const d = new Date(
      data.date.year,
      data.date.monthValue - 1,
      data.date.dayOfMonth,
      data.date.hour,
      data.date.minute,
      data.date.second,
    );
    data.date = formatDateAsText(getUTCDate(d), 'MMM do, hh:mm a');
  }

  return (
    <>
      <TableRow onClick={handleToggle}>
        <TableCell>
          <Text size="s" color="peanut" weight="regular">
            {data.date}
          </Text>
        </TableCell>
        <TableCell>
          <Text size="s" color="peanut" weight="regular">
            {data.bobjectType ? data.bobjectType : '-'}
          </Text>
        </TableCell>
        <TableCell>
          <Text size="s" color="peanut" weight="regular">
            {triggerDescription()}
          </Text>
        </TableCell>
        <TableCell>{checkStatus(data.status)}</TableCell>
      </TableRow>
      <Modal title="View Sync Log content" open={open} onClose={handleClose}>
        <ModalContent>
          <div className={styles._code_block_header}>
            <p>log info</p>
            <Clipboard
              text={JSON.stringify(
                Object.fromEntries(
                  Object.keys(data)
                    .filter(key => data[key])
                    .map(key => [key, data[key]]),
                ),
                null,
                2,
              )}
            />
          </div>
          <CodeBlock language="json" theme={theme}>
            {JSON.stringify(
              Object.fromEntries(
                Object.keys(data)
                  .filter(key => data[key])
                  .map(key => [key, data[key]]),
              ),
              null,
              2,
            )}
          </CodeBlock>
        </ModalContent>
        <div className={styles._modal_footer}>
          <ModalFooter>
            <Button onClick={handleClose}>Close</Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
};

CodeBlockModal.propTypes = {
  data: PropTypes.object,
};
export default CodeBlockModal;
