import React, { createContext, useContext, useState } from 'react';
import { BobjectApi } from '../../misc/api/bobject';
import { useTaskNavigation } from '../../hooks/useTaskNavigation';

const TaskContext = createContext();

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTaskContext must be used within TaskContext');
  }

  return context;
};

const markAsDone = taskId =>
  BobjectApi.request()
    .Task()
    .partialSet({
      bobjectId: taskId,
      data: {
        TASK__STATUS: 'TASK__STATUS__COMPLETED',
      },
    });

export const TaskProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [taskIdToMarkAsDone, setTaskIdToMarkAsDone] = useState();
  const { setTaskAsCompleted } = useTaskNavigation();
  const [checked, setChecked] = useState(false);

  return (
    <TaskContext.Provider
      value={{
        showToast,
        setShowToast: (show, taskId) => {
          setTaskIdToMarkAsDone(taskId);
          setShowToast(show);
        },
        markAsDone: () => {
          markAsDone(taskIdToMarkAsDone, () => {
            setChecked(true);
          });
          setTaskAsCompleted(taskIdToMarkAsDone);
        },
        checked,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
