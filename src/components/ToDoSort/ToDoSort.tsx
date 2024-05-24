import { FC, useContext, useState } from 'react';

import { StyledContainer } from './ToDoSort.styles';
import { Button } from '../atoms/Button/Button';
import { TodoContext } from '../../store/ToDo';

export const ToDoSort: FC = () => {
  const { todos, sortTodosBy } = useContext(TodoContext);

  const [sortBy, setSortBy] = useState<'title' | 'done' | null>(null);

  const onSortHandler = (value: 'title' | 'done') => {
    setSortBy((prev) => (prev === value ? null : value));
    sortTodosBy(value === sortBy ? undefined : value);
  };

  return (
    <StyledContainer>
      <small>Sort by:</small>
      <Button
        variant="link"
        style={{ fontWeight: sortBy === 'title' ? 'bold' : 'normal' }}
        onClick={() => onSortHandler('title')}
        disabled={todos.length < 2}
      >
        Title
      </Button>
      <Button
        variant="link"
        style={{ fontWeight: sortBy === 'done' ? 'bold' : 'normal' }}
        onClick={() => onSortHandler('done')}
        disabled={todos.length < 2}
      >
        Done
      </Button>
    </StyledContainer>
  );
};
