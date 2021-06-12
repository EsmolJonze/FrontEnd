import React, { useCallback } from 'react';
import SearchBar from '../../../searchBar';
import style from './searchFilter.module.css';
import { useBobjectTable, useEntity } from '../../../../hooks';
import debounce from 'lodash/debounce';
import { pickBy } from 'lodash';

const useMainTextField = bobjectType => {
  const bobjectFields = useEntity('bobjectFields');
  if (bobjectFields) {
    let logicRole;
    if (bobjectType?.name === 'Lead') {
      logicRole = 'LEAD__FULL_NAME';
    }
    if (bobjectType?.name === 'Company') {
      logicRole = 'COMPANY__NAME';
    }
    if (bobjectType?.name === 'Opportunity') {
      logicRole = 'OPPORTUNITY__NAME';
    }
    return bobjectFields.findBy('logicRole')(logicRole);
  }
  return undefined;
};

const SearchFilterInput = ({ bobjectType }) => {
  const { query, setQuery, setPage } = useBobjectTable();

  const mainTextField = useMainTextField(bobjectType);

  const handleSearch = useCallback(
    debounce(newValue => {
      setPage(0);
      if (!newValue) {
        setQuery(pickBy(query, (value, key) => key !== mainTextField.id));
      } else {
        setQuery({
          ...query,
          [mainTextField.id]: { value: newValue, type: 'AUTOCOMPLETE__SEARCH' },
        });
      }
    }, 200),
    [mainTextField, setQuery, query],
  );

  return (
    <div className={style._container}>
      <SearchBar
        handleChange={handleSearch}
        updateRefDependencies={[query, mainTextField]}
        updateRefFunction={() =>
          (query &&
            typeof query[(mainTextField?.id)]?.value === 'string' &&
            query[mainTextField.id].value) ||
          ''
        }
      />
    </div>
  );
};

export default SearchFilterInput;
