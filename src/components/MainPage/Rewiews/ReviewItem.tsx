import Icon from '@/components/common/Icon';
import { IconNames } from '@/components/common/Icon/types';
import { StFlex } from '@/components/common/styled/Block';
import { StSpan } from '@/components/common/styled/Text';
import React from 'react';
import { FontWeight } from '@/constants/ui';
import { StReviewItem } from './styled';

interface Props {
  review: string;
  name: string;
  icon: IconNames;
}

const ReviewItem: React.FC<Props> = ({ icon, name, review }) => (
  <StReviewItem>
    <StSpan lineHeight="150%" fontSize="12px" fontWeight={FontWeight.bold}>{review}</StSpan>
    <StFlex jc="end" ai="end" height="100%">
      <StSpan fontSize="15px" fontWeight={FontWeight.bold}>{name}</StSpan>
      <Icon margin="0 0 0 10px" alt="avatar" name={icon} ext="png" />
    </StFlex>
  </StReviewItem>
);

export default ReviewItem;
