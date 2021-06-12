import { useCallback, useState } from 'react';
import { useVisible } from '@bloobirds-it/bloobirds-platform-component-library';

export const useContextMenu = () => {
  const [xPos, setXPos] = useState('0px');
  const [yPos, setYPos] = useState('0px');

  const { ref, visible, setVisible } = useVisible(false);

  const handleContextMenu = useCallback(e => {
    e.preventDefault();
    setXPos(`${e.pageX}px`);
    setYPos(`${e.pageY}px`);
    setVisible(true);
  }, [setXPos, setYPos]);

  const hideContextMenu = () => {
    setVisible(false);
  };

  return {
    ref,
    xPos,
    yPos,
    isContextMenuVisible: visible,
    handleContextMenu,
    hideContextMenu,
  };
};
