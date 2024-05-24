import { styled } from '@linaria/react';
import { css } from '@linaria/core';

export const ModalContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const ModalHeader = styled.div`
  display: 'flex';
  align-items: 'center';
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const actionButton = css`
  width: 100%;
`;
