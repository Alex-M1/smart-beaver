import React, { ReactNode, PropsWithChildren } from 'react';
import MuiButton from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import { BUTTON_VARIANTS, ButtonColor, ButtonVariants } from './types';
import { theme } from '../styled/theme';

interface Props extends PropsWithChildren {
  url?: string;
  size?: 'small' | 'medium' | 'large';
  width?: string;
  color?: ButtonColor;
  height?: string;
  padding?: string;
  content?: string | ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: ButtonVariants,
  disabled?: boolean;
  className?: string;
  startIcon?: ReactNode;
  borderRadius?: string;
  onTouchStart?: () => void;
}

const Button: React.FC<Props> = ({
  url,
  width,
  size = 'medium',
  color = 'primary',
  height,
  padding,
  content,
  onClick,
  variant = BUTTON_VARIANTS.contained,
  children,
  disabled,
  className,
  startIcon,
  borderRadius,
  onTouchStart,
}) => {
  const sxProps = {
    width, height, borderRadius, padding, fontFamily: 'Gilroy, sans-serif',
  };
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        sx={sxProps}
        size={size}
        href={url}
        color={color}
        onClick={onClick}
        variant={variant}
        disabled={disabled}
        className={className}
        startIcon={startIcon}
        onTouchStart={onTouchStart}
      >
        {content || children}
      </MuiButton>
    </ThemeProvider>
  );
};

export default Button;
