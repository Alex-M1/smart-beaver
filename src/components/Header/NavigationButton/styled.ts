import { colors } from '@/constants/colors';
import Link from 'next/link';
import styled from 'styled-components';

export const RotateArrow = styled.span<{ open: boolean }>`
  transform:${({ open }) => (open ? ' rotate(270deg)' : 'rotate(90deg)')};
  transition-duration: .5s;
  margin-left: 7px;
`;

export const StLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
`;
