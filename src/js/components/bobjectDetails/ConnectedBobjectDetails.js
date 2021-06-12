import React, { useEffect, useRef, useState } from 'react';
import BobjectDetails from './presentation';
import Modal from '@material-ui/core/Modal';
import { BobjectApi } from '../../misc/api/bobject';
import { useBobjectDetails } from '../../hooks';

const BobjectDetailsModal = ({ bobject }) => {
  const {
    isOpen,
    bobject: stateBobject,
    setBobjectDetails,
    resetBobjectDetails,
    closeBobjectDetails,
  } = useBobjectDetails();

  useEffect(() => resetBobjectDetails, []);

  const [companyOfLead, setCompanyOfLead] = useState(undefined);
  const ref = useRef(null);

  const getCompanyId = () =>
    stateBobject.fields
      .filter(field => field.logicRole === 'LEAD__COMPANY')
      ?.reduce(object => object)
      ?.value?.split('/')[2];

  const getCompany = companyId =>
    BobjectApi.request()
      .bobjectType('Company')
      .getForm(companyId)
      .then(response => setCompanyOfLead(response))
      .catch(err => console.info(err));

  useEffect(() => {
    if (stateBobject && stateBobject?.id.typeName === 'Lead') {
      const companyId = getCompanyId();
      if (companyId) {
        getCompany(companyId);
      }
    } else if (stateBobject && stateBobject?.id.typeName === 'Company') {
      setCompanyOfLead(stateBobject);
    }
  }, [stateBobject]);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      closeBobjectDetails();
      resetBobjectDetails();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  if (bobject !== undefined && bobject !== stateBobject) {
    setBobjectDetails(bobject);
    return <div />;
  }
  if (bobject === undefined && stateBobject === undefined) {
    return <div />;
  }
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isOpen}
      onClose={closeBobjectDetails}
      hideBackdrop
      disableEnforceFocus
      disableAutoFocus
      style={{ width: 400, left: 'unset' }}
    >
      <div ref={ref}>
        <BobjectDetails company={companyOfLead} />
      </div>
    </Modal>
  );
};

export default BobjectDetailsModal;
