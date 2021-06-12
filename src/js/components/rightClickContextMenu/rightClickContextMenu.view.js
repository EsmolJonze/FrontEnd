import React from 'react';
import PropTypes from 'prop-types';
import styles from './rightClickContextMenu.module.css';

const RightClickContextMenu = ({ url, xPos, yPos, hideContextMenu }) => (
  <div
    className={styles._container__wrapper}
    style={{ top: `calc(${yPos} - 8px)`, left: `calc(${xPos} - 8px)` }}
    onMouseLeave={() => {
      hideContextMenu();
    }}
  >
    <div className={styles._container}>
      <a
        target="_blank"
        rel="noreferrer"
        href={url}
        onClick={event => {
          window.open(url, '_blank');
          hideContextMenu();
          event.preventDefault();
          event.stopPropagation();
        }}
        className={styles._link}
      >
        Open in a new tab
      </a>
    </div>
  </div>
);

RightClickContextMenu.propTypes = {
  hideContextMenu: PropTypes.func.isRequired,
  xPos: PropTypes.string.isRequired,
  yPos: PropTypes.string.isRequired,
};

export default RightClickContextMenu;
