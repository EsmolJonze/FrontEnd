import { atom, useRecoilState, useResetRecoilState } from 'recoil';
import { BobjectApi } from '../misc/api/bobject';

export const activeCompanyAtom = atom({
  key: 'activeCompanyAtom',
  default: {
    data: undefined,
    loaded: false,
    isFetching: false,
  },
});

const fetchCompany = companyId =>
  BobjectApi.request()
    .Company()
    .getForm(companyId);

export const useActiveCompany = () => {
  const [companyState, setCompanyState] = useRecoilState(activeCompanyAtom);
  const resetActiveCompany = useResetRecoilState(activeCompanyAtom);

  const updateActiveCompany = (companyId, onError) => {
    if (!companyState.isFetching) {
      setCompanyState(
        companyId === companyState.data?.id.objectId
          ? { ...companyState, isFetching: true }
          : { ...companyState, loaded: false, isFetching: true },
      );
      fetchCompany(companyId)
        .then(response => {
          setCompanyState({
            data: response,
            loaded: true,
            isFetching: false,
          });
        })
        .catch(error => {
          setCompanyState({
            isFetching: false,
          });
          onError(error);
        });
    }
  };

  const setActiveCompany = company => {
    setCompanyState({
      data: company,
      loaded: true,
      isFetching: false,
    });
  };

  return {
    company: companyState.data,
    isLoaded: companyState.loaded,
    isFetching: companyState.isFetching,
    setActiveCompany,
    updateActiveCompany,
    resetActiveCompany,
  };
};
