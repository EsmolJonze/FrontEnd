import { atom, useRecoilState, useResetRecoilState } from 'recoil';

const confirmDeleteModalAtom = atom({
  key: 'confirmDeleteModal',
  default: {
    isOpen: false,
    bobject: null,
  },
});

const useConfirmDeleteModal = () => {
  const [state, setState] = useRecoilState(confirmDeleteModalAtom);
  const resetState = useResetRecoilState(confirmDeleteModalAtom);

  const closeDeleteModal = () => {
    resetState();
  };

  const openDeleteModal = bobject => {
    setState({
      isOpen: true,
      bobject,
    });
  };

  return {
    ...state,
    openDeleteModal,
    closeDeleteModal,
  };
};

export default useConfirmDeleteModal;
