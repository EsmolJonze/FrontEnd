import React from 'react';
import TaskProvider from '../../../contexts/task';
import FullListTab from './fullList.view';
import { BobjectListProvider } from '../../../contexts/bobjectList/bobjectList.provider';

const FullListTabContainer = props => (
  <BobjectListProvider>
    <TaskProvider>
      <FullListTab {...props} />
    </TaskProvider>
  </BobjectListProvider>
);

export default FullListTabContainer;
