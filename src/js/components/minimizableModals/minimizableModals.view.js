import React from 'react';
import { useMinimizableModals } from '../../hooks/emails/useMinimizableModals';
import styles from './minimizableModals.module.css';
import { IconButton, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useRouter } from '../../hooks';
import ConfirmCloseModal from '../confirmCloseModal';
import { modalToOpen, styleProps } from './minimizableModals.utils';

const MinimizableModals = () => {
  const {
    minimizableModals,
    getMinimizableModalContext,
    confirmationModal,
    openConfirmModal,
  } = useMinimizableModals();
  const { history } = useRouter();

  return (
    <div className={styles._container}>
      {confirmationModal.isOpen && <ConfirmCloseModal />}
      {Object.keys(minimizableModals).map(key =>
        minimizableModals[key].isOpen ? (
          modalToOpen(minimizableModals[key].type, minimizableModals[key].id)
        ) : (
          <div
            className={styles._minimizedModal__container}
            onClick={() => getMinimizableModalContext(minimizableModals[key].id).maximize()}
            style={{
              backgroundColor: styleProps(minimizableModals[key].type).color,
            }}
          >
            <IconButton
              name={styleProps(minimizableModals[key].type).icon}
              color="white"
              size={16}
              onClick={() =>
                history.push(getMinimizableModalContext(minimizableModals[key].id).maximize())
              }
            />
            <Text color="white" size="s" weight="medium" ellipsis={24}>
              {getMinimizableModalContext(minimizableModals[key].id).title}
            </Text>
            <IconButton
              name="maximize"
              color="white"
              size={16}
              onClick={() => getMinimizableModalContext(minimizableModals[key].id).maximize()}
            />
            <IconButton
              name="cross"
              color="white"
              size={18}
              onClick={event => {
                event.stopPropagation();
                event.preventDefault();
                openConfirmModal(minimizableModals[key].id);
              }}
            />
          </div>
        ),
      )}
    </div>
  );
};

export default MinimizableModals;
