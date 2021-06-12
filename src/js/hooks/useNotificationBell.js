import { useNotifications } from './useNotifications';
import { atom, useRecoilState } from 'recoil';

const categoryAtom = atom({
  key: 'notificationBellCategory',
  default: 'UPDATES',
});

const useNotificationBell = () => {
  const [category, setCategory] = useRecoilState(categoryAtom);
  const methods = useNotifications(category);

  return {
    category,
    setCategory,
    ...methods,
  };
};

export default useNotificationBell;
