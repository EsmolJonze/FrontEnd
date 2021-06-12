import React from 'react';
import { Button, Icon } from '@bloobirds-it/bloobirds-platform-component-library';
import { useLocation } from 'react-router';
import { useMediaQuery } from '../../../../hooks';
import style from './addButton.module.css';

const CreateBobjectButton = ({ handleAddNew, bobjectType }) => {
  const { isSmallDesktop, isDesktop } = useMediaQuery();
  const getButtonText = () => (!isDesktop ? `Create ${bobjectType.name}` : 'Create');
  const location = useLocation();
  let iconProps;
  if (!isSmallDesktop) {
    iconProps = {
      iconLeft: 'add',
    };
  }

  return (
    <div className={style._container}>
      <Button
        dataTest={'formCreate'}
        {...iconProps}
        onClick={() => handleAddNew(bobjectType?.name, location)}
      >
        {!isSmallDesktop ? getButtonText() : <Icon name="add" color="white" size={16} />}
      </Button>
    </div>
  );
};

export default CreateBobjectButton;
