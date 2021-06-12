import React from 'react';
import { OPEN_MODAL_ADD_QA } from '../../../actions/dictionary';
import { withWrappers } from '../../../misc/utils';
import {
  ACCEPT_MQL,
  ACCEPT_MQL_AAA,
  ACCEPT_SAL,
  ADD_QC,
  DECLINE_MQL,
  DECLINE_SAL,
  EDIT,
} from './actionsRowTypes';
import { ADD_QC_TASK_MODAL_ADD_QC_TO_LEAD_OPEN } from '../../../actions/dictionary/app/main/taskWorkspace/addQcTask';
import { BobjectApi } from '../../../misc/api/bobject';
import { Button, IconButton, Tooltip } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './actionsRow.module.css';
import { useActiveUser } from '../../../hooks';
import { useTableContext } from '../context/bobjectTable.context';

const BaseActionButton = ({ title, onClick, ...iconProps }) => (
  <Tooltip title={title} position="top">
    <IconButton size={20} onClick={onClick} {...iconProps} />
  </Tooltip>
);

const AddQcActionButton = ({ onClick }) => (
  <Button onClick={onClick} size="small">
    Add QC
  </Button>
);

const EditLeadActionButton = props => <BaseActionButton name="edit" color="bloobirds" {...props} />;

const AcceptLeadActionButton = props => <BaseActionButton name="check" color="melon" {...props} />;

const AcceptAAALeadActionButton = props => (
  <BaseActionButton name="starUnchecked" color="banana" {...props} />
);
const DeclineLeadActionButton = props => (
  <BaseActionButton name="cross" color="tomato" {...props} />
);

const ActionsRow = ({ bobject, handleOpenQcModal, actionsRow, openAddQcToLeadModal }) => {
  const { activeUser } = useActiveUser();
  const { setProvisionalRemoveRow } = useTableContext();

  const handleRowClick = fields => event => {
    setProvisionalRemoveRow(bobject.id.objectId);
    event.stopPropagation();
    event.preventDefault();
    BobjectApi.request()
      .Lead()
      .partialSet({ bobjectId: bobject.id.objectId, data: fields });
  };

  const handleAcceptMql = handleRowClick({
    LEAD__MQL: 'LEAD__MQL__ACCEPTED',
    LEAD__MQL_DISPATCHED_BY: activeUser.id,
  });

  const handleRejectMql = handleRowClick({
    LEAD__MQL: 'LEAD__MQL__REJECTED',
    LEAD__MQL_DISPATCHED_BY: activeUser.id,
  });

  const handleAcceptSal = handleRowClick({
    LEAD__SAL: 'LEAD__SAL__ACCEPTED',
    LEAD__SAL_DISPATCHED_BY: activeUser.id,
  });

  const handleAcceptAAASal = handleRowClick({
    LEAD__MARKETING_AAA: 'LEAD__MARKETING_AAA__YES',
    LEAD__MQL_DISPATCHED_BY: activeUser.id,
  });

  const handleRejectSal = handleRowClick({
    LEAD__SAL: 'LEAD__SAL__REJECTED',
    LEAD__SAL_DISPATCHED_BY: activeUser.id,
  });

  return (
    <div className={styles.container}>
      {actionsRow.includes(EDIT) && (
        <EditLeadActionButton
          onClick={handleOpenQcModal(bobject.id.typeName, bobject.id.objectId, bobject)}
          title="Edit"
        />
      )}
      {actionsRow.includes(ADD_QC) && <AddQcActionButton onClick={openAddQcToLeadModal(bobject)} />}
      {actionsRow.includes(ACCEPT_MQL_AAA) && (
        <AcceptAAALeadActionButton
          onClick={handleAcceptAAASal}
          title="Accept Lead and label it as marketing AAA"
        />
      )}
      {actionsRow.includes(ACCEPT_MQL) && (
        <AcceptLeadActionButton onClick={handleAcceptMql} title="Accept Lead" />
      )}
      {actionsRow.includes(DECLINE_MQL) && (
        <DeclineLeadActionButton onClick={handleRejectMql} title="Decline Lead" />
      )}
      {actionsRow.includes(ACCEPT_SAL) && (
        <AcceptLeadActionButton onClick={handleAcceptSal} title="Accept Lead" />
      )}
      {actionsRow.includes(DECLINE_SAL) && (
        <DeclineLeadActionButton onClick={handleRejectSal} title="Decline Lead" />
      )}
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  handleOpenQcModal: (bobjectType, id, bobject) => () =>
    dispatch({
      type: OPEN_MODAL_ADD_QA,
      mode: 'EDIT',
      id,
      bobjectType,
      bobject,
    }),
  openAddQcToLeadModal: bobject => event => {
    event.stopPropagation();
    event.preventDefault();
    dispatch({ type: ADD_QC_TASK_MODAL_ADD_QC_TO_LEAD_OPEN, bobject });
  },
});

export default withWrappers({ mapDispatchToProps, style: {} })(ActionsRow);
