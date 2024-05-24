import { FC, PropsWithChildren, createContext } from 'react';
import { useTodo } from './hooks/use-todo';

export type TodoStore = ReturnType<typeof useTodo>;

export const TodoContext = createContext<TodoStore>({} as TodoStore);

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const todosStore = useTodo();

  return (
    <TodoContext.Provider value={todosStore}>{children}</TodoContext.Provider>
  );
};
