import { FC, useContext, useState } from 'react';

import { ToDo } from '../../interfaces/to-do';
import {
  StyledActionsContainer,
  StyledInfoContainer,
  StyledInputContainer,
  StyledListItem,
} from './ToDoItem.styles';
import { Button } from '../atoms/Button/Button';
import { TodoContext } from '../../store/ToDo';
import { ToDoModal } from '../ToDoModal/ToDoModal';

interface ToDoItemProps {
  todo: ToDo;
}

export const ToDoItem: FC<ToDoItemProps> = ({ todo }) => {
  const { removeTodo, toggleTodoState } = useContext(TodoContext);
  const [updateTodo, setUpdateTodo] = useState(false);

  const onUpdateTodoHandler = () => setUpdateTodo(true);

  const onRemoveTodoHandler = () => removeTodo(todo.id);

  return (
    <>
      <StyledListItem>
        <StyledInputContainer>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodoState(todo.id)}
          />
        </StyledInputContainer>
        <StyledInfoContainer>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </StyledInfoContainer>
        <StyledActionsContainer>
          <Button variant="warning" onClick={onUpdateTodoHandler}>
            Edit
          </Button>
          <Button variant="danger" onClick={onRemoveTodoHandler}>
            Remove
          </Button>
        </StyledActionsContainer>
      </StyledListItem>
      {updateTodo && (
        <ToDoModal
          onCloseModalHandler={() => setUpdateTodo(false)}
          todo={todo}
        />
      )}
    </>
  );
};
