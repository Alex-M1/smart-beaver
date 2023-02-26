import { colors } from '@/constants/colors';
import { locales } from '@/constants/locales';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';
import { flexCenter } from '../styled/mixins';

export const StAploadArea = styled.div`
  label {
    width: 100%;
    height: 179px;
    border: 1px solid ${colors.darkGray};
    display: inline-block;
    position: relative;
    &.droped {
      border: 1px dashed ${colors.darkGray};
      &::before {
        content: "Drop files here";
        background: ${colors.darkGray};
        color: ${colors.white};
        font-size: 24px;
        ${flexCenter};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
      }
    }
    &::before {
      content: "${locales.upload_files}";
      position: absolute;
      top: 0;
      left: 0;
      width: 136px;
      height: 40px;
      background: ${colors.darkGray};
      color: ${colors.white};
      font-weight: ${FontWeight.bold};
      ${flexCenter}
    }

    .upload__file-names {
      padding-top: 45px;
    }
  }
  .error {
    font-size: 12px;
    color: ${colors.error};
  }

  @media (min-width: 768px) {
    label {
      width: 274px;
    }
  }
`;
