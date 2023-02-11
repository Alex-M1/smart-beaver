import React, { ReactNode, PropsWithChildren } from 'react';
import MuiButton from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import { BUTTON_VARIANTS, ButtonColor, ButtonVariants } from './types';
import { theme } from '../styled/theme';

interface Props extends PropsWithChildren {
  url?: string;
  width?: string;
  color?: ButtonColor;
  height?: string;
  padding?: string;
  content?: string | ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: ButtonVariants,
  disabled?: boolean;
  className?: string;
  borderRadius?: string;
  onTouchStart?: () => void;
}

const Button: React.FC<Props> = ({
  url,
  width,
  color = 'primary',
  height,
  padding,
  content,
  onClick,
  variant = BUTTON_VARIANTS.contained,
  children,
  disabled,
  className,
  borderRadius,
  onTouchStart,
}) => {
  const sxProps = {
    width, height, borderRadius, padding,
  };
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        sx={sxProps}
        href={url}
        onClick={onClick}
        onTouchStart={onTouchStart}
        disabled={disabled}
        variant={variant}
        color={color}
        className={className}
      >
        {content || children}
      </MuiButton>
    </ThemeProvider>
  );
};

export default Button;
