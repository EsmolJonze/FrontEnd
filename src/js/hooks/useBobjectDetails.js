import { atom, useRecoilState, useResetRecoilState } from 'recoil';

const bobjectDetailsOpenAtom = atom({
  key: 'bobjectDetailsOpenAtom',
  default: false,
});

const bobjectDetailsAtom = atom({
  key: 'bobjectDetailsAtom',
  default: {
    bobject: undefined,
    showMoreExpanded: false,
    showContactButton: false,
  },
});

export const useBobjectDetailsVisibility = () => {
  const [bobjectDetailsOpen, setBobjectDetailsOpen] = useRecoilState(bobjectDetailsOpenAtom);

  const openBobjectDetails = () => {
    if (!bobjectDetailsOpen) {
      setBobjectDetailsOpen(true);
    }
  };

  const closeBobjectDetails = () => {
    if (bobjectDetailsOpen) {
      setBobjectDetailsOpen(false);
    }
  };

  return {
    isOpen: bobjectDetailsOpen,
    openBobjectDetails,
    closeBobjectDetails,
  };
};

export const useBobjectDetails = () => {
  const [bobject, setBobject] = useRecoilState(bobjectDetailsAtom);
  const { isOpen, openBobjectDetails, closeBobjectDetails } = useBobjectDetailsVisibility();
  const resetBobjectDetails = useResetRecoilState(bobjectDetailsAtom);

  const setBobjectDetails = data => {
    setBobject({
      ...bobject,
      ...data,
    });
  };

  return {
    bobject: bobject.bobject,
    config: {
      showContactButton: bobject.showContactButton,
      showMoreExpanded: bobject.showMoreExpanded,
    },
    isOpen,
    closeBobjectDetails,
    openBobjectDetails,
    resetBobjectDetails,
    setBobjectDetails,
  };
};
