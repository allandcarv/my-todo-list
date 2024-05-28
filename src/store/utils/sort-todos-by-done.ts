import { ToDo } from '../../interfaces/to-do';

export const sortTodosByDone = (todos: ToDo[]) => {
  const newTodos = [...todos];

  newTodos.sort((todoA, todoB) => +todoB.done - +todoA.done);

  return newTodos;
};
