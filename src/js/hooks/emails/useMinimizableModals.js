import { atom, useRecoilState } from 'recoil';
import omit from 'lodash/omit';
import { convertHtmlToString } from '../../utils/email.utils';
import { serialize, SERIALIZE_MODE } from '../../components/richTextEditor/serializer/serializer';
import { usePreventWindowUnload } from '../usePreventWindowUnload';
import { useToasts } from '@bloobirds-it/bloobirds-platform-component-library';
import { v4 as uuid } from 'uuid';

const defaultState = {
  type: null,
  activity: null,
  data: null,
  id: '',
  isOpen: true,
  isConfirmationOpen: false,
  mode: null,
  template: { body: '', subject: '', id: null },
  variables: {},
  company: {
    name: '',
    url: '',
    data: {},
  },
  opportunity: {
    name: '',
    url: '',
    data: {},
  },
  title: 'New activity',
};

const minimizableModalsAtom = atom({
  key: 'minimizableModalsConfiguration',
  default: {},
});

const confirmationModalAtom = atom({
  key: 'confirmationMinimizableModal',
  default: {
    isOpen: false,
    id: null,
  },
});

const constructTitle = (type, data) => {
  switch (type) {
    case 'Email':
      return !(data.subject[0].children[0].text === '')
        ? convertHtmlToString(
            serialize({ children: data.subject }, SERIALIZE_MODE.PLAIN_HTML),
            null,
            false,
          )
        : 'New Email';
    case 'Meeting':
    case 'Note':
    case 'Task':
      return data.company.name.slice(0, 10);
    default:
      return null;
  }
};

const useMinimizableModals = () => {
  const [minimizableModals, setMinimizableModals] = useRecoilState(minimizableModalsAtom);
  const [confirmationModal, setConfirmationModal] = useRecoilState(confirmationModalAtom);
  const { createToast } = useToasts();
  usePreventWindowUnload(Object.keys(minimizableModals).length > 0);

  const openConfirmModal = id => {
    setConfirmationModal({
      isOpen: true,
      id,
    });
  };

  const cancelConfirmModal = () => {
    setConfirmationModal({
      isOpen: false,
      id: null,
    });
  };

  const getMinimizableModalContext = id => ({
    type: minimizableModals[id].type,
    activity: minimizableModals[id].activity,
    closeModal: () => setMinimizableModals(omit(minimizableModals, id)),
    company: minimizableModals[id].company,
    opportunity: minimizableModals[id].opportunity,
    title: minimizableModals[id].title,
    data: minimizableModals[id].data,
    id,
    isConfirmationOpen: minimizableModals[id].isConfirmationOpen,
    isOpen: minimizableModals[id].isOpen,
    maximize: () =>
      setMinimizableModals({
        ...minimizableModals,
        [id]: { ...minimizableModals[id], isOpen: true },
      }),
    minimize: data => {
      if (Object.keys(minimizableModals).length >= 10) {
        createToast({ message: 'You cannot minimize more than 10 windows', type: 'error' });
      } else {
        setMinimizableModals({
          ...minimizableModals,
          [id]: {
            ...minimizableModals[id],
            isOpen: false,
            data,
            title: constructTitle(minimizableModals[id].type, data),
          },
        });
      }
    },
    mode: minimizableModals[id].mode,
    template: minimizableModals[id].template,
    variables: minimizableModals[id].variables,
  });

  const openMinimizableModal = options => {
    const generatedId = uuid();
    setMinimizableModals({
      ...minimizableModals,
      [generatedId]: {
        ...defaultState,
        ...options,
        id: generatedId,
        title: options.template?.subject
          ? convertHtmlToString(options.template?.subject)
          : `New ${options.type.toLowerCase()}`,
      },
    });
  };

  return {
    minimizableModals,
    getMinimizableModalContext,
    openMinimizableModal,
    openConfirmModal,
    cancelConfirmModal,
    confirmationModal,
  };
};

export { useMinimizableModals };
