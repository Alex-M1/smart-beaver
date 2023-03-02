import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const StInput = styled(TextField) <{ borderRadius: string }>`
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: ${({ borderRadius }) => borderRadius};
  }
`;
