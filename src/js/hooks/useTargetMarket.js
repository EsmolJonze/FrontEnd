import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { ServiceApi } from '../misc/api/service';

const targetMarketAtom = atom({
  key: 'targetMarket',
  default: {
    data: {},
    lastFetchData: new Date(0).getTime(),
    isFetching: false,
  },
});

const fetchCadenceByTargetMarket = targetMarketName =>
  ServiceApi.request({
    url: '/service/view/cadence/targetMarket',
    method: 'GET',
    requestParams: {
      targetMarketName,
    },
  });

export const useTargetMarket = targetMarket => {
  const [targetMarketsList, setTargetMarketsList] = useRecoilState(targetMarketAtom);

  const loadTargetMarket = targetName => {
    if (!targetMarketsList.isFetching) {
      setTargetMarketsList({ ...targetMarketsList, isFetching: true });
      fetchCadenceByTargetMarket(targetName).then(response => {
        setTargetMarketsList({
          data: { ...targetMarketsList.data, [targetName]: response },
          loaded: true,
          isFetching: false,
        });
      });
    }
  };

  useEffect(() => {
    if (targetMarket && !targetMarketsList.data[targetMarket]) {
      loadTargetMarket(targetMarket);
    }
  }, [targetMarket]);

  return targetMarket && targetMarketsList.data[targetMarket];
};
