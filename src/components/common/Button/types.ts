export enum BUTTON_VARIANTS {
  text = 'text',
  outlined = 'outlined',
  contained = 'contained',
}

export type ButtonColor = 'warning' | 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info'

export type ButtonVariants = keyof typeof BUTTON_VARIANTS;
