import { styled } from '@linaria/react';

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 0;

  &:nth-of-type(even) {
    background-color: #f1f1f1;
  }
  &:last-of-type {
    border-bottom: 1px solid black;
  }
`;

export const StyledInputContainer = styled.div`
  flex: 0 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInfoContainer = styled.div`
  flex: 0 0 75%;
  & > h2 {
    font-size: 1rem;
  }
`;

export const StyledActionsContainer = styled.div`
  flex: 0 0 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
