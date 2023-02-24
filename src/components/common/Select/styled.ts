import { colors } from '@/constants/colors';
import Select from '@mui/material/Select';
import styled from 'styled-components';

export const StSelect = styled(Select) <{ hasValue: string; }>`
  ${({ hasValue }) => !hasValue && `color: ${colors.placeholder};`};
`;
