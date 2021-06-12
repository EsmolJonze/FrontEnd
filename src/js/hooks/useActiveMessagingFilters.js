import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const messagingStageFilter = atom({
  key: 'messagingStageFilter',
  default: 'PROSPECT',
});

const messagingVisibilityFilter = atom({
  key: 'messagingVisibilityFilter',
  default: 'PUBLIC',
});

const messagingSegmentationValuesIds = atom({
  key: 'messagingSegmentationValuesIds',
  default: {},
});

const messagingNameFilter = atom({
  key: 'messagingNameFilter',
  default: null,
});

const messagingFilters = selector({
  key: 'messagingFilterAtom',
  get: ({ get }) => ({
    stage: get(messagingStageFilter),
    visibility: get(messagingVisibilityFilter),
    segmentationValues: get(messagingSegmentationValuesIds),
    name: get(messagingNameFilter),
  }),
});

export const useActiveMessagingStageFilter = () => useRecoilState(messagingStageFilter);

export const useActiveMessagingNameFilter = () => useRecoilState(messagingNameFilter);

export const useActiveMessagingVisibilityFilter = () => useRecoilState(messagingVisibilityFilter);

export const useActiveMessagingSegmentationValuesFilter = () => {
  const [segmentationValues, setAllSegmentationValues] = useRecoilState(
    messagingSegmentationValuesIds,
  );

  const setOneSegmentationValue = (filterId, value) => {
    if (!value) {
      const newValue = { ...segmentationValues };
      delete newValue[filterId];
      setAllSegmentationValues(newValue);
    } else {
      setAllSegmentationValues({
        ...segmentationValues,
        [filterId]: [value],
      });
    }
  };

  const resetActiveMessagingFilters = () => setAllSegmentationValues({});

  return {
    segmentationValues,
    setOneSegmentationValue,
    setAllSegmentationValues,
    resetActiveMessagingFilters,
  };
};

// TODO: Move to useState when refactor
const useActiveMessagingFilters = () => useRecoilValue(messagingFilters);

export default useActiveMessagingFilters;
