import React, { useEffect } from 'react';
import Slide from '@material-ui/core/Slide';
import Footer from './footer';
import Content from './content';
import style from './importForm.module.css';

const ImportForm = ({ visibility, setVisibilityComponent }) => {
  useEffect(() => {
    setVisibilityComponent(true);
    return () => setVisibilityComponent(false);
  }, []);
  return (
    visibility && (
      <Slide direction="left" in mountOnEnter unmountOnExit>
        <div className={style._root}>
          <Content hideView={setVisibilityComponent} />
          <Footer setVisibilityComponent={setVisibilityComponent} />
        </div>
      </Slide>
    )
  );
};

export default ImportForm;
