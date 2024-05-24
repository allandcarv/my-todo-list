import { useCallback, useState } from 'react';

import { ToDo } from '../../interfaces/to-do';

export const useTodo = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTodo = useCallback((todo: Omit<ToDo, 'id'>) => {
    const newTodo: ToDo = {
      id: Math.random().toFixed(3),
      description: todo.description,
      done: todo.done,
      title: todo.title,
      timestamp: new Date().getTime(),
    };

    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const updateTodo = useCallback(
    (id: string, newTodo: Partial<Omit<ToDo, 'id'>>) => {
      setTodos((prev) => {
        const newTodos = prev.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              ...newTodo,
            };
          }

          return todo;
        });

        return newTodos;
      });
    },
    []
  );

  const toggleTodoState = useCallback(
    (id: string) =>
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      ),
    []
  );

  const removeTodo = useCallback(
    (id: string) => setTodos((prev) => prev.filter((todo) => todo.id !== id)),
    []
  );

  const sortTodosBy = useCallback((value?: 'title' | 'done') => {
    setTodos((todos) => {
      const newTodos = structuredClone(todos);

      if (!value) {
        newTodos.sort((todoA, todoB) => todoA.timestamp - todoB.timestamp);
      }

      if (value === 'done') {
        newTodos.sort((todoA, todoB) => +todoB.done - +todoA.done);
      }

      if (value === 'title') {
        newTodos.sort((todoA, todoB) => todoA.title.localeCompare(todoB.title));
      }

      return newTodos;
    });
  }, []);

  return {
    todos,
    addTodo,
    updateTodo,
    removeTodo,
    toggleTodoState,
    sortTodosBy,
  };
};
