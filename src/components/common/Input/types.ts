export enum INPUT_VARIANTS {
  filled = 'filled',
  outlined = 'outlined',
  standard = 'standard'
}

export type InputType = 'text' | 'password' | 'number'

export interface ContentFields {
  title?: string;
  iconTitle?: string;
  helperText?: string;
  placeholder: string;
}
