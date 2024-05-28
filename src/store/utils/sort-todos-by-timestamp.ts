import { ToDo } from '../../interfaces/to-do';

export const sortTodosByTimestamp = (todos: ToDo[]) => {
  const newTodos = [...todos];

  newTodos.sort((todoA, todoB) => todoA.timestamp - todoB.timestamp);

  return newTodos;
};
