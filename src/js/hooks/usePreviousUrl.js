import { atom, useRecoilState } from 'recoil';

const previousUrlAtom = atom({
  key: 'previousUrlAtom',
  default: '',
});

export const usePreviousUrl = () => {
  const [previousUrl, setPreviousUrl] = useRecoilState(previousUrlAtom);
  const getPreviousUrl = () => previousUrl;
  const resetPreviousUrl = () => {
    setPreviousUrl('');
  };
  return {
    previousUrl,
    getPreviousUrl,
    resetPreviousUrl,
    setPreviousUrl,
  };
};
