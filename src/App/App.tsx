import { FC } from 'react';

import { StyledContainer } from './App.styles';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { TodoProvider } from '../store/ToDo';

export const App: FC = () => (
  <TodoProvider>
    <StyledContainer>
      <h1>My ToDo List</h1>
      <ToDoList />
    </StyledContainer>
  </TodoProvider>
);
