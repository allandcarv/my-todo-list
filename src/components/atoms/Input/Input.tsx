import { InputHTMLAttributes, forwardRef } from 'react';

import { StyledInput } from './Input.styles';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ ...inputProps }, forwardedRef) => (
  <StyledInput {...inputProps} ref={forwardedRef} />
));
