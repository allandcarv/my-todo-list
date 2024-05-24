import { styled } from '@linaria/react';

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.375rem 0.75rem;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;

  &::placeholder {
    opacity: 0.8;
  }
`;
