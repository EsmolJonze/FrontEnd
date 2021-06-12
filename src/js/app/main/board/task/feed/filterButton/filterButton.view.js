import React from 'react';
import classNames from 'clsx';
import { Icon, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useLocation } from 'react-router';
import { toCamelCase } from '../../../../../../utils/strings.utils';
import style from './filterButton.module.css';
import { useActiveUser, useHover, useRouter } from '../../../../../../hooks';
import { useUserPermissions } from '../../../../../../components/userPermissions/hooks';

const FilterButton = ({
  changeCategory,
  counterIsInboundLeads,
  counterIsProspect,
  counterIsSales,
  taskType,
  icon,
  inboundCountOfLeads,
  prospectTasksCount,
  salesTaskCount,
  name,
  selectedTaskCategory,
  taskCategory,
  taskCount,
  route,
  color,
}) => {
  const { history } = useRouter();
  const location = useLocation();
  const isActive = selectedTaskCategory === taskCategory;
  const filterName = name && toCamelCase(name);
  const permissions = useUserPermissions();
  const { activeAccount } = useActiveUser();

  const getCounter = () => {
    if (counterIsInboundLeads) {
      return inboundCountOfLeads;
    }
    if (counterIsProspect) {
      return prospectTasksCount;
    }
    if (counterIsSales) {
      return salesTaskCount;
    }
    if (taskType !== undefined) {
      return taskType.map(x => taskCount[x]).reduce((a, b) => a || (0 + b ? b : 0));
    }

    return undefined;
  };

  const counter = getCounter();

  const containerClasses = classNames(style[`_${filterName}`], style._container);

  const [ref, isHover] = useHover();

  const iconContainerClasses = classNames(style._icon, {
    [style._icon_active]: isActive,
  });

  const hasPermission = nameFilter => {
    let hasPermissionToShow = true;

    // TODO: Remove it when emagister has access to sales feature
    if (nameFilter === 'Sales' && activeAccount?.id === 'yFkj90TJnaFcfGE7') {
      return false;
    }

    if (
      name === 'Contact' &&
      (permissions.prospect || permissions.scheduled || permissions.meeting)
    ) {
      hasPermissionToShow = true;
    } else if (!permissions[toCamelCase(nameFilter)]) {
      hasPermissionToShow = false;
    }

    return hasPermissionToShow;
  };

  return (
    hasPermission(name) && (
      <div
        data-intercom={`task-button ${name}`}
        className={containerClasses}
        ref={ref}
        style={{
          backgroundColor:
            isHover || isActive ? `var(--${color.root})` : 'var(--verySoftBloobirds)',
        }}
        onClick={() => {
          if (route !== undefined && !location.pathname.startsWith(route)) {
            history.push(route);
          }
          changeCategory(taskCategory);
        }}
      >
        {(taskType !== undefined || counter !== undefined) && (
          <div className={style._counter}>
            <span data-test="Number-TabButtonCounter">{counter || 0}</span>
          </div>
        )}
        <div className={iconContainerClasses}>
          <Icon name={icon} color={isHover || isActive ? color.icon : 'peanut'} />
        </div>
        <Text
          dataTest={`filterButton${name}`}
          size="xs"
          color={(isHover || isActive) && color.text ? color.text : 'peanut'}
          align="center"
        >
          {name}
        </Text>
      </div>
    )
  );
};

export default FilterButton;
