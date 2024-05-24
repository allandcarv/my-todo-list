import { styled } from '@linaria/react';

type Variant = 'primary' | 'secondary' | 'warning' | 'danger' | 'link';

export interface StyledButtonProps {
  variant?: Variant;
}

const BACKGROUND_COLOR: Record<Variant, string> = {
  danger: '#dc3545',
  link: 'transparent',
  primary: '#007bff',
  secondary: '#6c757d',
  warning: '#ffc107',
};

const BORDER_COLOR: Record<Variant, string> = {
  danger: '#dc3545',
  link: 'transparent',
  primary: '#007bff',
  secondary: '#6c757d',
  warning: '#ffc107',
};

const HOVERED_BACKGROUND_COLOR: Record<Variant, string> = {
  danger: '#c82333',
  link: 'transparent',
  primary: '#0069d9',
  secondary: '#5a6268',
  warning: '#e0a800',
};

const HOVERED_BORDER_COLOR: Record<Variant, string> = {
  danger: '#c82333',
  link: 'transparent',
  primary: '#0069d9',
  secondary: '#5a6268',
  warning: '#e0a800',
};

const FONT_COLOR: Record<Variant, string> = {
  danger: '#fff',
  link: '#007bff',
  primary: '#fff',
  secondary: '#fff',
  warning: '#212529',
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.5rem;
  max-height: 40px;
  min-width: 60px;
  border-radius: 5px;
  background: none;
  color: ${(props) => FONT_COLOR[props.variant || 'primary']};
  font-size: 1rem;
  border: 1px solid #007bff;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  background-color: ${(props) => BACKGROUND_COLOR[props.variant || 'primary']};
  border-color: ${(props) => BORDER_COLOR[props.variant || 'primary']};

  &:hover {
    background-color: ${(props) =>
      HOVERED_BACKGROUND_COLOR[props.variant || 'primary']};
    border-color: ${(props) =>
      HOVERED_BORDER_COLOR[props.variant || 'primary']};
    text-decoration: ${(props) =>
      props.variant === 'link' ? 'underline' : 'none'};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    text-decoration: none;
  }
`;
