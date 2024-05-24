import { FC, ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { StyledButton, StyledButtonProps } from './Button.styles';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> &
  StyledButtonProps;

export const Button: FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return <StyledButton {...buttonProps}>{children}</StyledButton>;
};
