import React, { useEffect, useState } from 'react';
import { BobjectApi } from '../../../../../../../misc/api/bobject';
import { Item, SearchInput, Dropdown } from '@bloobirds-it/bloobirds-platform-component-library';
import { getValueFromLogicRole } from '../../../../../../../utils/bobjects.utils';
import styles from './addQcTask.module.css';
import useDebounce from '../../../../../../../hooks/useDebounce';

const AutoCompleteSelect = ({ onCompanyIdChange }) => {
  const [options, setOptions] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const debounceSearchValue = useDebounce(searchValue, 200);

  useEffect(() => {
    if (debounceSearchValue) {
      BobjectApi.request()
        .Company()
        .search({
          injectReferences: false,
          query: {
            COMPANY__NAME: [debounceSearchValue],
          },
          formFields: true,
          pageSize: 10,
        })
        .then(payload => {
          const newOptions = payload.contents.map(company => ({
            id: company.id.value,
            name: getValueFromLogicRole(company, 'COMPANY__NAME'),
          }));
          setOptions(newOptions);
        });
    }
  }, [debounceSearchValue]);

  const handleSelect = value => {
    onCompanyIdChange(value);
    const name = options.find(option => option.id === value).name;
    setSearchValue(name);
    setSelectedValue(name);
  };

  return (
    <Dropdown
      width="100%"
      visible={options.length > 0 && selectedValue !== searchValue}
      arrow={false}
      anchor={
        <div style={{ width: '100%' }}>
          <SearchInput
            width="100%"
            placeholder="Search companies"
            value={searchValue}
            onChange={setSearchValue}
          />
        </div>
      }
    >
      {options.map(option => (
        <Item className={styles.item} onClick={handleSelect} key={option.id} value={option.id}>
          {option.name}
        </Item>
      ))}
    </Dropdown>
  );
};

export default AutoCompleteSelect;
