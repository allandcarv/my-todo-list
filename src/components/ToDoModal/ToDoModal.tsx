import { ElementRef, FC, useContext, useEffect, useRef } from 'react';

import { Modal } from '../Modal/Modal';
import {
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  actionButton,
} from './ToDoModal.styles';
import { Button } from '../atoms/Button/Button';
import { Input } from '../atoms/Input/Input';
import { TodoContext } from '../../store/ToDo';
import { ToDo } from '../../interfaces/to-do';

interface ToDoModalProps {
  onCloseModalHandler: () => void;
  todo?: ToDo;
}

export const ToDoModal: FC<ToDoModalProps> = ({
  onCloseModalHandler,
  todo,
}) => {
  const { addTodo, updateTodo } = useContext(TodoContext);

  const titleInputRef = useRef<ElementRef<'input'>>(null);
  const descriptionInputRef = useRef<ElementRef<'input'>>(null);

  const onAddTodoHandler = () => {
    const description = descriptionInputRef.current?.value;
    const title = titleInputRef.current?.value;

    if (description?.trim() && title?.trim()) {
      addTodo({
        description,
        done: false,
        title,
      });
      onCloseModalHandler();
    }
  };

  const onUpdateTodoHandler = () => {
    const description = descriptionInputRef.current?.value;
    const title = titleInputRef.current?.value;

    if (description?.trim() && title?.trim()) {
      updateTodo(todo!.id, {
        description,
        done: todo!.done,
        title,
      });
      onCloseModalHandler();
    }
  };

  const onButtonClickHandler = () =>
    todo ? onUpdateTodoHandler() : onAddTodoHandler();

  const onCancelHandler = () => onCloseModalHandler();

  useEffect(() => {
    if (todo) {
      if (descriptionInputRef.current && titleInputRef.current) {
        descriptionInputRef.current.value = todo.description;
        titleInputRef.current.value = todo.title;
      }
    }
  }, [todo]);

  return (
    <Modal>
      <ModalContainer>
        <ModalHeader>
          <h2>{!todo ? 'Add new ToDo' : `Update ToDo #${todo.id}`}</h2>
        </ModalHeader>
        <ModalBody>
          <section>
            <label htmlFor="title">Title</label>
            <Input type="text" id="title" ref={titleInputRef} />
          </section>
          <section>
            <label htmlFor="description">Description</label>
            <Input type="text" id="description" ref={descriptionInputRef} />
          </section>
        </ModalBody>
        <ModalFooter>
          <Button
            className={actionButton}
            variant="primary"
            onClick={onButtonClickHandler}
          >
            {!todo ? 'Add' : 'Update'}
          </Button>
          <Button
            className={actionButton}
            variant="danger"
            onClick={onCancelHandler}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContainer>
    </Modal>
  );
};
