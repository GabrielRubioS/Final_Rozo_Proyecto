import React, { useContext } from 'react';
import './FilterTasks.css';
import { taskContext } from '../Context/Context';

export const FilterTasks = () => {
  // Obtener el contexto de las tareas
  const context = useContext(taskContext);

  // Función para manejar el cambio de filtro
  const handleFilters = (event) => {
    const currentOption = event.target.value;

    // Filtrar las tareas según la opción seleccionada
    if (currentOption === 'Pendientes') {
      context.setFilteredTask(context.tasks.filter(task => !task.status));
    } else if (currentOption === 'Realizadas') {
      context.setFilteredTask(context.tasks.filter(task => task.status));
    } else {
      // Si la opción es "Todas", mostramos todas las tareas
      context.setFilteredTask(context.tasks);
    }
  };

  return (
    <div className="container-filters">
      <label htmlFor="filters">Filtrar por:</label>
      <select onChange={handleFilters}>
        <option value="Todas" className="opt opt1">Todas</option>
        <option value="Pendientes" className="opt opt2">Pendientes</option>
        <option value="Realizadas" className="opt opt3">Realizadas</option>
      </select>
    </div>
  );
};  