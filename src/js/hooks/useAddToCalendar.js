import { atom, useRecoilState, useRecoilValue } from 'recoil';

const addToCalendarOpenAtom = atom({
  key: 'addToCalendarOpen',
  default: false,
});

const addToCalendarAtom = atom({
  key: 'addToCalendar',
  default: {
    isOpen: false,
    leadId: null,
    dateTime: null,
    title: null,
    companyId: null,
    guests: null,
    bobjectType: null,
    successCallback: () => {},
  },
});

export const useAddToCalendarVisibility = () => {
  const [addToCalendarOpen, setAddToCalendarOpen] = useRecoilState(addToCalendarOpenAtom);
  const { successCallback } = useRecoilValue(addToCalendarAtom);

  const openAddToCalendarModal = () => {
    setAddToCalendarOpen(true);
  };

  const closeAddToCalendarModal = () => {
    setAddToCalendarOpen(false);
    if (successCallback) {
      successCallback();
    }
  };

  return {
    isOpen: addToCalendarOpen,
    openAddToCalendarModal,
    closeAddToCalendarModal,
  };
};

export const useAddToCalendar = () => {
  const [addToCalendarState, setAddToCalendarState] = useRecoilState(addToCalendarAtom);
  const { closeAddToCalendarModal, openAddToCalendarModal, isOpen } = useAddToCalendarVisibility();

  return {
    addToCalendarState,
    isOpen,
    closeAddToCalendarModal,
    openAddToCalendarModal,
    setAddToCalendarState,
  };
};
