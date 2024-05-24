import { styled } from '@linaria/react';

export const StyledContainer = styled.div`
  width: 100%;
  max-height: 80%;
  margin: auto;
  margin-top: 2rem;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
