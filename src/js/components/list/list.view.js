import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/dates.utils';
import { Text, Tooltip, Icon } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './list.module.css';

const DATE_FORMAT = 'MMMM do, y';

const List = ({
  children,
  date,
  emptyMessage,
  onShowMore,
  title,
  tooltip,
  totalItems,
  dataIntercom,
}) => {
  const count = useMemo(() => React.Children.count(children), [children]);

  if (!emptyMessage && totalItems === 0) {
    return null;
  }

  return (
    <section className={styles._list_section} data-intercom={dataIntercom}>
      <header className={styles._header}>
        <Text inline size="m" weight="medium" color="peanut">
          {title}&nbsp;({totalItems})
        </Text>
        {date && (
          <Text inline size="m" color="softPeanut">
            &nbsp;{formatDate(date, DATE_FORMAT)}
          </Text>
        )}
        {tooltip && (
          <Tooltip title={tooltip} position="top">
            <Icon color="darkBloobirds" name="infoFilled" />
          </Tooltip>
        )}
      </header>
      {totalItems !== 0 && <ol className={styles._list}>{children}</ol>}
      {count < totalItems && (
        <button className={styles._show_button} type="button" onClick={onShowMore}>
          <Text uppercase size="s" color="bloobirds" align="center">
            Show More
          </Text>
        </button>
      )}
    </section>
  );
};

List.propTypes = {
  children: PropTypes.any.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  emptyMessage: PropTypes.string,
  onShowMore: PropTypes.func,
  title: PropTypes.string,
  tooltip: PropTypes.string,
  totalItems: PropTypes.number,
};

List.defaultProps = {
  onShowMore: () => {},
  totalItems: 0,
};

export default List;
