import { useCallback, useRef, useState } from 'react';

import { ToDo } from '../../interfaces/to-do';
import { SortTodo } from '../../interfaces/sort-to-do';
import { sortTodosByTimestamp } from '../utils/sort-todos-by-timestamp';
import { sortTodosByDone } from '../utils/sort-todos-by-done';
import { sortTodosByTitle } from '../utils/sort-todos-by-title';

export const useTodo = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const sortTodosRef = useRef<SortTodo | null>(null);

  const addTodo = useCallback((todo: Omit<ToDo, 'id'>) => {
    const newTodo: ToDo = {
      id: Math.random().toFixed(3),
      description: todo.description,
      done: todo.done,
      title: todo.title,
      timestamp: new Date().getTime(),
    };

    setTodos((prev) => {
      const newTodos = [...prev, newTodo];

      if (sortTodosRef.current === 'title') {
        return sortTodosByTitle(newTodos);
      }

      return newTodos;
    });
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

        if (sortTodosRef.current === 'title') {
          return sortTodosByTitle(newTodos);
        }

        return newTodos;
      });
    },
    []
  );

  const toggleTodoState = useCallback((id: string) => {
    setTodos((todos) => {
      const newTodos = structuredClone(todos).map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );

      if (sortTodosRef.current === 'done') {
        return sortTodosByDone(newTodos);
      }

      return newTodos;
    });
  }, []);

  const removeTodo = useCallback(
    (id: string) => setTodos((prev) => prev.filter((todo) => todo.id !== id)),
    []
  );

  const sortTodosBy = useCallback((value?: SortTodo) => {
    setTodos((todos) => {
      if (value === 'done') {
        sortTodosRef.current = 'done';

        return sortTodosByDone(todos);
      }

      if (value === 'title') {
        sortTodosRef.current = 'title';

        return sortTodosByTitle(todos);
      }

      sortTodosRef.current = null;

      return sortTodosByTimestamp(todos);
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
