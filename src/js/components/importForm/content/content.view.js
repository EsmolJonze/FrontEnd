import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import ImportStepper from '../stepper/importStepper';
import style from './content.module.css';

const ContentView = ({ hideView }) => {
  const currentLocation = useRef();
  const location = useLocation();

  useEffect(() => {
    if (!currentLocation.current) {
      currentLocation.current = location.pathname;
    } else if (currentLocation.current !== location.pathname) {
      hideView(false);
    }
  }, [location.pathname]);
  return (
    <div className={style._root}>
      <h2 className={style._title}>Bulk Files</h2>
      <ImportStepper />
    </div>
  );
};

export default ContentView;
