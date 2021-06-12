import { atom, useRecoilState } from 'recoil';

const activeFiltersAtom = atom({
  key: 'activeFiltersAtom',
  default: {},
});

export const useActiveFilters = () => {
  const [filtersState, setActiveFilters] = useRecoilState(activeFiltersAtom);

  return { filters: filtersState, setFilters: setActiveFilters };
};
