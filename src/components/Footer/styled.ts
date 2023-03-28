import { colors } from '@/constants/colors';
import styled from 'styled-components';

export const StFooter = styled.footer`
  background: ${colors.brownPrimary};
  .footer-container {
    padding: 54px 73px 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media print {
    display: none;
  }
  @media (max-width: 550px) {
    .footer-container {
      display:flex;
      flex-direction:column;
      align-items: center;
      & > div {
        align-items: center !important;
      }
    }
  }  
`;
