import React, { useContext, useEffect } from 'react';
import './infoTasks.css';
import { taskContext } from '../../Context/Context';

export const InfoTasks = () => {
  const context = useContext(taskContext);


  useEffect(() => {
    let pending = context.tasks.filter(tasks => tasks.status === false)
    let resolve = context.tasks.filter(tasks => tasks.status === true)

    context.setPendingTasks(pending.length)
    context.setDoneTasks(resolve.length)
  
  }, [context.tasks])
  

  return (
    <>
      <h2 className="info-tasks">
        Usted tiene <span className="task-pending">{context.pendingTasks}</span> pendientes y <span class="task-done">{context.doneTasks}</span> terminadas
      </h2>
    </>
  );
};
