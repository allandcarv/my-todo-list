import { FC, useContext } from 'react';

import {
  StyledButtonContainer,
  StyledContainer,
  StyledHeader,
  StyledList,
} from './ToDoList.styles';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { TodoContext } from '../../store/ToDo';
import { AddTodo } from '../AddTodo/AddTodo';
import { ToDoSort } from '../ToDoSort/ToDoSort';

export const ToDoList: FC = () => {
  const { todos = [] } = useContext(TodoContext);

  return (
    <>
      <StyledContainer>
        <StyledHeader>
          <ToDoSort />
        </StyledHeader>
        <StyledList>
          {todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} />
          ))}
        </StyledList>
        <StyledButtonContainer>
          <AddTodo />
        </StyledButtonContainer>
      </StyledContainer>
    </>
  );
};
