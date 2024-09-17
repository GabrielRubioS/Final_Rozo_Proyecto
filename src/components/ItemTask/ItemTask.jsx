import './ItemTask.css';
import { useContext } from 'react';
import { taskContext } from '../Context/Context';

export const ItemTask = ({ idTask, titleTask, content}) => {

  const { tasks, updateTaskStatus } = useContext(taskContext);

  const task = tasks.find( task => task.id === idTask)


  const handleCheckboxChange = () => {
    updateTaskStatus(idTask, !task.status)
  }


  return (
      <li id={idTask} className={task.status ? 'item-task checked' : 'item-task'}>
        <div className={task.status ? 'circle-state circle-green' : 'circle-state'}></div>
        <h2>{titleTask}</h2>
        <p>{content}</p>
        <input
          type="checkbox"
          checked={task.status}
          onChange={handleCheckboxChange}
        />
      </li>
    )
}
