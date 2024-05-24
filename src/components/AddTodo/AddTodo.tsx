import { FC, useState } from 'react';

import { Button } from '../atoms/Button/Button';
import { ToDoModal } from '../ToDoModal/ToDoModal';

export const AddTodo: FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Add new ToDo
      </Button>
      {showModal && (
        <ToDoModal onCloseModalHandler={() => setShowModal(false)} />
      )}
    </>
  );
};
