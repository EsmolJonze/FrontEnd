import React, { useCallback, useEffect } from 'react';
import styles from './messagingSearchBar.module.css';
import { SearchInput } from '@bloobirds-it/bloobirds-platform-component-library';
import { useActiveMessagingNameFilter } from '../../../hooks/useActiveMessagingFilters';
import { debounce } from 'lodash';

const MessagingSearchBar = ({ placeholder }) => {
  const [, setMessagingTemplateName] = useActiveMessagingNameFilter();

  useEffect(() => {
    setMessagingTemplateName(null);
  }, []);

  const handleMessagingTemplateNameChange = useCallback(
    debounce(setMessagingTemplateName, 200),
    [],
  );

  return (
    <div className={styles.container}>
      <SearchInput
        onChange={handleMessagingTemplateNameChange}
        placeholder={placeholder}
        width="190px"
      />
    </div>
  );
};

export default MessagingSearchBar;
