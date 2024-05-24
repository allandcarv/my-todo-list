import { FC, PropsWithChildren } from 'react';

import { StyledContainer, StyledOverlay } from './Modal.styles';
import { createPortal } from 'react-dom';

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  const portalEl = document.getElementById('portal')!;

  return createPortal(
    <StyledOverlay role="tooltip">
      <StyledContainer>{children}</StyledContainer>
    </StyledOverlay>,
    portalEl
  );
};
