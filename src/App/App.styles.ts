import { styled } from '@linaria/react';

export const StyledContainer = styled.div`
  width: 95%;
  height: 95%;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #fff;

  @media only screen and (min-width: 768px) {
    padding: 2rem;
  }
`;
