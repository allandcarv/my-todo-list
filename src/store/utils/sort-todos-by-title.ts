import { ToDo } from '../../interfaces/to-do';

export const sortTodosByTitle = (todos: ToDo[]) => {
  const newTodos = [...todos];

  newTodos.sort((todoA, todoB) => todoA.title.localeCompare(todoB.title));

  return newTodos;
};
