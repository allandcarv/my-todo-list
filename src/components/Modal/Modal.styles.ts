import { styled } from '@linaria/react';

export const StyledOverlay = styled.aside`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledContainer = styled.div`
  max-height: 95%;
  max-width: 95%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px;
`;
