import React, { ReactNode, PropsWithChildren } from 'react';
import MuiButton from '@mui/material/Button';
import { BUTTON_VARIANTS, ButtonVariants } from './types';

interface Props extends PropsWithChildren {
  url?: string;
  width?: string;
  height?: string;
  content?: string | ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: ButtonVariants,
  endIcon?: ReactNode;
  disabled?: boolean;
  startIcon?: ReactNode;
  onTouchStart?: () => void;
}

const Button: React.FC<Props> = ({
  url,
  width,
  height,
  content,
  onClick,
  variant = BUTTON_VARIANTS.contained,
  endIcon,
  children,
  disabled,
  startIcon,
  onTouchStart,
}) => {
  const sxProps = { width, height };
  return (
    <MuiButton
      sx={sxProps}
      href={url}
      onClick={onClick}
      onTouchStart={onTouchStart}
      disabled={disabled}
      variant={variant}
      endIcon={endIcon}
      startIcon={startIcon}
    >
      {content || children}
    </MuiButton>
  );
};

export default Button;
