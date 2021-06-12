import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import {
  CheckButton,
  Dropdown,
  Icon,
  Item,
  Tooltip,
  useVisible,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './cardItem.module.css';
import { useContextMenu } from '../../hooks';
import RightClickContextMenu from '../rightClickContextMenu';

const CardItem = ({
  checkButtonProps,
  contentLeft,
  contentRight,
  contextMenuProps,
  history,
  isCompleted,
  isRejected,
  to,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { ref, visible, setVisible } = useVisible();

  const handleChangeContextMenu = event => {
    setVisible(!visible);
    event.preventDefault();
  };

  const cardClasses = classnames(styles._container, {
    [styles._completed]: isCompleted || isRejected,
  });
  const stopPropagation = event => event.preventDefault();
  const completeButtonProps = checkButtonProps?.disabled ? { onClick: stopPropagation } : {};

  const {
    ref: refContextMenu,
    xPos,
    yPos,
    isContextMenuVisible,
    handleContextMenu,
    hideContextMenu,
  } = useContextMenu();

  return (
    <div
      className={cardClasses}
      onClick={event => {
        if (to) {
          if (event.ctrlKey || event.metaKey) {
            window.open(to, '_blank');
          } else {
            history.push(to);
          }
        }
      }}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      ref={refContextMenu}
      onContextMenu={handleContextMenu}
    >
      {checkButtonProps && (
        <div className={styles._complete_button} {...completeButtonProps}>
          {checkButtonProps.tooltipText ? (
            <Tooltip title={checkButtonProps.tooltipText} position="top">
              <CheckButton
                dataTest="markAsDone"
                checked={checkButtonProps.checked}
                disabled={checkButtonProps.disabled}
                onClick={(status, event) => checkButtonProps.handleCheckClick(status, event)}
              />
            </Tooltip>
          ) : (
            <CheckButton
              dataTest="markAsDone"
              checked={checkButtonProps.checked}
              disabled={checkButtonProps.disabled}
              onClick={(status, event) => checkButtonProps.handleCheckClick(status, event)}
            />
          )}
        </div>
      )}
      <div className={styles._content_left}>{contentLeft}</div>
      <div className={styles._content_right}>{contentRight}</div>
      {contextMenuProps && (
        <div className={styles._context_menu} onClick={handleChangeContextMenu}>
          <Dropdown
            ref={ref}
            visible={visible}
            arrow={false}
            align="left"
            anchor={
              <div className={styles._user_button} onClick={handleChangeContextMenu}>
                <Icon name="more" color="bloobirds" />
              </div>
            }
          >
            {contextMenuProps.options.map(option => (
              <Item key={option.name} onClick={option.handleOnClick}>
                {option.name}
              </Item>
            ))}
          </Dropdown>
        </div>
      )}
      {isContextMenuVisible && (
        <RightClickContextMenu url={to} xPos={xPos} yPos={yPos} hideContextMenu={hideContextMenu} />
      )}
    </div>
  );
};

CardItem.propTypes = {
  checkButtonProps: PropTypes.shape({
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    tooltipText: PropTypes.string,
  }),
  contentLeft: PropTypes.node,
  contentRight: PropTypes.node,
  contextMenuProps: PropTypes.shape({
    options: PropTypes.array,
  }),
  to: PropTypes.string,
};

export default CardItem;
