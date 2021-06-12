import React from 'react';
import {
  Dropdown,
  IconButton,
  Item,
  useVisible,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useActiveCompany, useActivity, useBobjectFormVisibility } from '../../../../hooks';
import { useBobjectPermissions } from '../../../userPermissions/hooks';
import {
  ACTIVITY_FIELDS_LOGIC_ROLE,
  ACTIVITY_TYPES,
  ACTIVITY_DIRECTION,
  REPORTED_VALUES_LOGIC_ROLE,
} from '../../../../constants/activity';
import { getTextFromLogicRole } from '../../../../utils/bobjects.utils';

const ContextMenu = ({ bobject }) => {
  const { company } = useActiveCompany();
  const { reportedActivityResult } = useActivity('activityCard');
  const { checkPermissions } = useBobjectPermissions();
  const { openEditModal } = useBobjectFormVisibility();
  const { ref, visible, setVisible } = useVisible(false);
  const recordCall = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.CALL_RECORD_URL);
  const type = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.TYPE);
  const isIncomingActivity =
    getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.DIRECTION) ===
    ACTIVITY_DIRECTION.INCOMING;
  const showReportResult =
    (isIncomingActivity && type !== ACTIVITY_TYPES.INBOUND) || type === ACTIVITY_TYPES.MEETING;
  const hasPermission = company && checkPermissions(company);
  const isReported = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.REPORTED) === 'Yes';
  const isPinned = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.IS_PINNED) === 'Yes';
  const { setPinned } = useActivity('activityCard');

  const markAsNotReported = () => {
    reportedActivityResult({
      activityId: bobject?.id.objectId,
      valueLogicRole: REPORTED_VALUES_LOGIC_ROLE.NO,
    });
    setVisible(false);
  };
  const markAsReported = () => {
    reportedActivityResult({
      activityId: bobject?.id.objectId,
      valueLogicRole: REPORTED_VALUES_LOGIC_ROLE.YES,
    });
    setVisible(false);
  };

  return (
    <Dropdown
      visible={visible}
      anchor={
        <IconButton name="moreOpenholes" color="softPeanut" onClick={() => setVisible(!visible)} />
      }
    >
      <div ref={ref}>
        {type !== ACTIVITY_TYPES.CADENCE && (
          <Item
            icon="edit"
            onClick={() => {
              openEditModal({ bobject });
              setVisible(false);
            }}
            disabled={!hasPermission}
          >
            Edit activity
          </Item>
        )}
        {recordCall && (
          <Item icon="voicemail" onClick={() => window.open(recordCall, '_blank')}>
            Listen call recording
          </Item>
        )}
        <Item onClick={() => setPinned(bobject.id.objectId, isPinned, type)} icon="pin">
          {isPinned ? 'Unpin activity' : 'Pin activity'}
        </Item>
        {showReportResult && (
          <Item onClick={isReported ? markAsNotReported : markAsReported} icon="thumbsUp">
            {!isReported ? 'Mark as reported' : 'Mark as not reported'}
          </Item>
        )}
      </div>
    </Dropdown>
  );
};

export default ContextMenu;
